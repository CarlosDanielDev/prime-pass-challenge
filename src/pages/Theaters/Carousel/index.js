import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import shuffle from '../../../utils/shuffle';
import imdb from '../../../services/imdb';
import apikey from '../../../config/apiKey';

import {
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Info,
  Content,
  TitleCarousel,
  Rate,
  LoadContainer,
  Label,
  RateContainer,
} from './styles';

export default function CarouselList() {
  const navigation = useNavigation();
  const [soon, setSoon] = useState([]);
  const [load, setLoad] = useState(false);
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  function handleNavigateToMovie(data) {
    navigation.navigate('MovieDetails', {data});
  }
  async function getTemplates() {
    try {
      setLoad(true);
      const response = await imdb.get(
        `/pt/API/MostPopularMovies/${apikey.apiKey}`,
      );

      const {items} = response.data;
      const sortable = shuffle(items);
      setSoon(sortable);
      setLoad(false);
    } catch (error) {
      ToastAndroid.show('Oops! something went wrong.', ToastAndroid.CENTER);
    }
  }

  useEffect(() => {
    getTemplates();
  }, []);

  return (
    <Content>
      <TitleCarousel>Most Popular!</TitleCarousel>
      {!load ? (
        <Carousel
          data={soon}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          layout={'default'}
          renderItem={({item}) => (
            <Container>
              <TouchableOpacity onPress={() => handleNavigateToMovie(item)}>
                <ImageContainer>
                  <Image source={{uri: item.image}} />
                  <Title>{item.title}</Title>
                </ImageContainer>
              </TouchableOpacity>
              <InfoContainer>
                <RateContainer>
                  <Label isRating={item.imDbRating}>IMDb</Label>
                  <Rate rating={Number(item.imDbRating)}>
                    {item.imDbRating}
                  </Rate>
                  <Icon
                    color="#ffd700"
                    size={15}
                    name={item.imDbRating ? 'star' : ''}
                  />
                  <Info>{item.year}</Info>
                </RateContainer>
              </InfoContainer>
            </Container>
          )}
        />
      ) : (
        <LoadContainer>
          <ActivityIndicator size={30} color="#800000" />
        </LoadContainer>
      )}
    </Content>
  );
}
