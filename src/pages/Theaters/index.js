import React, {useState, useEffect} from 'react';
import {TouchableOpacity, FlatList, ToastAndroid} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import Header from '../../components/Header';
import ContainerDefault from '../../components/ContainerDefault';
import IconContent from '../../components/IconContent';
import TouchIcon from '../../components/TouchIcon';

import CarouselList from './Carousel';
import {
  ContainerTheater,
  Title,
  ContainerAddress,
  ContainerImage,
  Image,
  Info,
  TitleFlat,
  CenterTitle,
} from './styles';

export default function Theaters() {
  const route = useRoute();
  const navigation = useNavigation();
  const {name, id} = route.params.data;
  const [theaters, setTheaters] = useState([]);

  function navigateBack() {
    navigation.goBack();
  }

  async function loadTheaters(cityId) {
    try {
      const response = await api.get(`/theaters/city/${cityId}`);
      setTheaters(response.data);
    } catch (error) {
      ToastAndroid.show('Oops, something went wrong', ToastAndroid.CENTER);
    }
  }

  async function handleRedirectToMovieList(data) {
    navigation.navigate('Movies', {data});
  }

  useEffect(() => {
    loadTheaters(id);
  }, [id]);

  return (
    <ContainerDefault>
      <Header name={name}>
        <IconContent>
          <TouchIcon action={navigateBack}>
            <Icon name="chevron-left" size={18} color="#faffff" />
          </TouchIcon>
        </IconContent>
      </Header>

      <CarouselList cityId={id} />
      <CenterTitle>
        <TitleFlat>Theaters</TitleFlat>
      </CenterTitle>

      <FlatList
        data={theaters}
        keyExtractor={(theater) => theater.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item: theater}) => (
          <TouchableOpacity onPress={() => handleRedirectToMovieList(theater)}>
            <ContainerTheater>
              <ContainerImage>
                <Image source={{uri: theater.images[0].url}} />
              </ContainerImage>

              <ContainerAddress>
                <Title>{theater.name}</Title>
                <Info>
                  {theater.address} - {theater.number}
                </Info>
                <Info>{theater.neighborhood}</Info>
              </ContainerAddress>
            </ContainerTheater>
          </TouchableOpacity>
        )}
      />
    </ContainerDefault>
  );
}
