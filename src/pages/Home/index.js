/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StatusBar, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import {
  Container,
  Content,
  Title,
  Pick,
  Button,
  ButtonText,
  Label,
  ContainerPick,
} from './styles';

export default function Home() {
  const navigation = useNavigation();
  const [selectedState, setSelectedState] = useState('UNS');
  const [selectedCity, setSelecteCity] = useState('NOT');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState();
  const [load, setLoad] = useState(false);

  function handleNavigate() {
    const [cityData] = cities.filter((c) => c.id === selectedCity);
    navigation.navigate('Theaters', {
      data: cityData,
    });
  }
  async function loadStates() {
    try {
      const storedStates = await AsyncStorage.getItem('@states');

      if (!storedStates) {
        await getStates();
        return;
      }
      const parseStates = JSON.parse(storedStates);

      setStates(parseStates);
      setCities(false);
    } catch (error) {
      ToastAndroid.show('Cannot load states :(', ToastAndroid.CENTER);
    }
  }

  async function getStates() {
    try {
      const response = await api.get('/states');
      const arrayNames = response.data.map((state) => ({
        uf: state.uf,
        label: state.name,
      }));
      await AsyncStorage.setItem('@states', JSON.stringify(arrayNames));
      setStates(arrayNames);
    } catch (error) {
      ToastAndroid.show('Cannot load states :(', ToastAndroid.CENTER);
    }
  }

  async function getCities(uf) {
    try {
      if (setSelectedState !== 'UNS') {
        setLoad(true);
        const response = await api.get(`/states/${uf}`);
        setCities(response.data.cities);
        setLoad(false);
      }
    } catch (error) {
      ToastAndroid.show('Cannot load cities :(', ToastAndroid.CENTER);
    }
  }

  async function handleChangeState(uf) {
    setSelectedState(uf);
    await getCities(uf);
  }

  useEffect(() => {
    loadStates();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#800000" />
      <Content>
        <Title>Choose your Localtion!</Title>

        <ContainerPick>
          <Label>State:</Label>
          <Pick
            selectedValue={selectedState}
            onValueChange={(values, idx) => {
              handleChangeState(values);
            }}>
            <Pick.Item label="Not selected" value="UNS" />
            {states.map((state, i) => (
              <Pick.Item label={state.label} key={i} value={state.uf} />
            ))}
          </Pick>
        </ContainerPick>

        {load && <ActivityIndicator size="small" color="#800000" />}
        {cities && !load && (
          <ContainerPick>
            <Label>City:</Label>
            <Pick
              selectedValue={selectedCity}
              onValueChange={(values, idx) => setSelecteCity(values)}>
              <Pick.Item label="Not selected" value="NOT" />
              {cities.map((city) => (
                <Pick.Item label={city.name} key={city.id} value={city.id} />
              ))}
            </Pick>
          </ContainerPick>
        )}
        {selectedCity !== 'NOT' && (
          <Button onPress={handleNavigate}>
            <ButtonText>Search</ButtonText>
            <Icon name="search" size={15} color="#f0ffff" />
          </Button>
        )}
      </Content>
    </Container>
  );
}
