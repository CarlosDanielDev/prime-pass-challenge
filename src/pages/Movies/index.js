import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  ToastAndroid,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import imdb from '../../services/imdb';
import apikey from '../../config/apiKey';
import shuffle from '../../utils/shuffle';
import Header from '../../components/Header';

import IconContent from '../../components/IconContent';
import TouchIcon from '../../components/TouchIcon';
import {
  Input,
  InputContainer,
  SubmitButton,
  MovieContainer,
  Thumbnail,
  Title,
  Container,
} from './styles';

export default function Movies() {
  const route = useRoute();
  const navigation = useNavigation();
  const {name} = route.params.data;
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [expression, setExpression] = useState('');
  // const [] = useState();
  async function searchMovies() {
    try {
      if (expression.length < 1) {
        await loadMovies();
        return;
      }
      const response = await imdb.get(
        `/API/SearchMovie/${apikey.apiKey}/${expression}`,
      );
      const {results} = response.data;
      setMovies(results);
    } catch (error) {
      ToastAndroid.show('Fail to search :(', ToastAndroid.CENTER);
    }
  }
  async function loadMovies() {
    try {
      setLoad(true);
      const response = await imdb.get(
        `/API/MostPopularMovies/${apikey.apiKey}`,
      );
      const {items} = response.data;
      const sortable = shuffle(items);

      setMovies(sortable);
      setLoad(false);
    } catch (error) {
      ToastAndroid.show('Oops something went wrong!', ToastAndroid.CENTER);
    }
  }

  function navigateBack() {
    navigation.goBack();
  }
  function handleNavigateToMovie(data) {
    navigation.navigate('MovieDetails', {data});
  }

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <Container>
      <Header name={name}>
        <IconContent>
          <TouchIcon action={navigateBack}>
            <Icon name="chevron-left" size={18} color="#faffff" />
          </TouchIcon>
        </IconContent>
      </Header>
      <InputContainer>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Search Movie"
          onChangeText={(text) => setExpression(text)}
          returnKeyType="send"
          onSubmitEditing={searchMovies}
          value={expression}
        />

        <SubmitButton loading={load} onPress={searchMovies}>
          {load ? (
            <ActivityIndicator color="#faffff" size={18} />
          ) : (
            <Icon name="search" size={18} color="#faffff" />
          )}
        </SubmitButton>
      </InputContainer>

      <FlatList
        data={movies}
        keyExtractor={(mov) => mov.id}
        numColumns={2}
        onRefresh={loadMovies}
        refreshing={load}
        showsVerticalScrollIndicator={false}
        renderItem={({item: movie}) => (
          <TouchableOpacity onPress={() => handleNavigateToMovie(movie)}>
            <MovieContainer>
              <Thumbnail
                source={{
                  uri: movie.image,
                }}
              />
              <Title>{movie.title}</Title>
            </MovieContainer>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
