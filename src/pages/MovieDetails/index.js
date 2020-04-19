import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  ToastAndroid,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import imdb from '../../services/imdb';
import apikey from '../../config/apiKey';

import {
  Container,
  Title,
  Image,
  Info,
  ContainerButtonBack,
  DetailsMovie,
  GenreContainer,
  ItemInfo,
  TimeContainer,
  RateContainer,
  Tag,
  SynopsisContainer,
  TitleSynopsis,
  Synopsis,
  CrewContainer,
  Crew,
  StarContainer,
  StarImageContainer,
  ActorImage,
  ActorName,
  TitleActors,
  CharacterName,
  Year,
  RateItem,
} from './styles';

export default function MovieDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const {id, imDbRating, title, crew} = route.params.data;
  const [info, setInfo] = useState({});
  const [actors, setActors] = useState([]);
  const [load, setLoad] = useState(false);

  async function getInfoMovie(id) {
    try {
      setLoad(true);

      const response = await imdb.get(`/API/Title/${apikey.apiKey}/${id}`);
      const {actorList} = response.data;
      setInfo(response.data);
      setActors(actorList);
      setLoad(false);
    } catch (error) {
      ToastAndroid.show(
        'Fail to load info movie, sorry :(',
        ToastAndroid.CENTER,
      );
    }
  }
  useEffect(() => {
    getInfoMovie(id);
  }, [id]);

  return (
    <Container load={load}>
      {!load ? (
        <>
          <Image
            source={{
              uri: info.image,
            }}
          />
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <ContainerButtonBack onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={18} color="#fff" />
          </ContainerButtonBack>
          <Info>
            <Title>{title}</Title>
            <DetailsMovie>
              <GenreContainer>
                <ItemInfo>{info.genres}</ItemInfo>
              </GenreContainer>
              <TimeContainer>
                <Icon
                  color="#333"
                  size={12}
                  name={info.runtimeStr ? 'clock-o' : ''}
                />
                <ItemInfo>{info.runtimeStr}</ItemInfo>
              </TimeContainer>
            </DetailsMovie>
            <Year>{info.year}</Year>
            <RateContainer isRated={imDbRating}>
              <Icon color="#ffd700" size={15} name={imDbRating ? 'star' : ''} />
              <Tag isRated={imDbRating}>IMDb</Tag>
              <RateItem rate={Number(imDbRating)}>
                {imDbRating && imDbRating}
              </RateItem>
              <ItemInfo>{imDbRating && '/10'}</ItemInfo>
            </RateContainer>
            <CrewContainer>
              <Crew>{crew ? crew : info.directors + '(dir.)'}</Crew>
            </CrewContainer>
            <SynopsisContainer>
              <TitleSynopsis>Synopsis:</TitleSynopsis>
              <Synopsis>{info.plot}</Synopsis>
            </SynopsisContainer>
            <TitleActors>Actors:</TitleActors>
            <FlatList
              data={actors}
              keyExtractor={(act) => act.id}
              horizontal={true}
              renderItem={({item: actor}) => (
                <StarContainer>
                  <StarImageContainer>
                    <ActorImage source={{uri: actor.image}} />
                  </StarImageContainer>
                  <ActorName>{actor.name}</ActorName>
                  <CharacterName>
                    {actor.asCharacter && 'as ' + actor.asCharacter}
                  </CharacterName>
                </StarContainer>
              )}
            />
          </Info>
        </>
      ) : (
        <ActivityIndicator color="#800000" size={20} />
      )}
    </Container>
  );
}
