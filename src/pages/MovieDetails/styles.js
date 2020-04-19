import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  ${({load}) =>
    load &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: #290c00;
`;

export const Image = styled.Image`
  width: 100%;
  height: 62%;
`;

export const Info = styled.ScrollView`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  padding: 25px;
  background: #faffff;
  position: absolute;
  bottom: 10px;
  height: 40%;
`;

export const LoadContainer = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  background: #faffff;
  position: absolute;
  bottom: 0;
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtonBack = styled.TouchableOpacity`
  width: 35px;
  height: 30px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 50px;
  left: 10px;
  align-items: center;
  justify-content: center;
`;

export const DetailsMovie = styled.View`
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const GenreContainer = styled.View`
  width: 50%;
  flex-direction: row;
`;

export const ItemInfo = styled.Text`
  color: #290c00;
`;

export const RateItem = styled.Text`
  font-size: 15px;
  color: ${({rate}) => (rate > 5 ? 'green' : 'red')};
  margin: 0 2px;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 21%;
`;

export const RateContainer = styled.View`
  display: ${({isRated}) => (isRated ? 'flex' : 'none')};
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const Tag = styled.Text`
  display: ${({isRated}) => (isRated ? 'flex' : 'none')};
  color: #290c00;
  font-weight: bold;
  background: gold;
  padding: 2px;
  margin: 0 3px;
  border-radius: 4px;
`;

export const SynopsisContainer = styled.View`
  flex: 1;
  margin-top: 20px;
`;

export const TitleSynopsis = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
  color: #290c00;
`;

export const Synopsis = styled.Text`
  font-size: 15px;
  line-height: 30px;
  color: #999;
`;
export const CrewContainer = styled.View`
  margin-top: 10px;
  width: 100%;
`;
export const Crew = styled.Text`
  color: #999;
  font-size: 15;
`;

export const StarContainer = styled.View`
  width: 130px;
  height: 270px;
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 4px;
  margin-right: 5px;
`;

export const StarImageContainer = styled.View`
  width: 100px;
  height: 130px;
  border-radius: 4px;
`;

export const ActorImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 4px;
`;

export const ActorName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #290c00;
`;
export const CharacterName = styled.Text`
  /* font-weight: bold; */
  font-style: italic;
  font-size: 19px;
  color: #290c00;
`;
export const TitleActors = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 20px;
  color: #290c00;
`;

export const Year = styled.Text`
  margin-top: 5px;
  background: rgba(0, 0, 0, 0.3);
  color: #faffff;
  font-weight: bold;
  width: 36px;
  padding: 2px;
  border-radius: 4px;
  text-align: center;
`;
