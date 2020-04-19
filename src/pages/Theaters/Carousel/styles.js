import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 400px;
  background: #faffff;
  border-radius: 4px;
`;

export const Content = styled.View`
  background: #eee;
  padding: 10px;
  align-items: center;
`;
export const TitleCarousel = styled.Text`
  color: #290c00;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
`;
export const InfoModal = styled.Modal`
  width: 300px;
  height: 300px;
`;

export const LoadContainer = styled.View`
  width: 90%;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  padding: 15px 15px 5px 15px;
  align-items: center;
  justify-content: center;
  height: 355px;
`;
export const Title = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  color: #290c00;
`;
export const Image = styled.Image`
  margin-top: 10px;
  width: 200px;
  height: 310px;
  border-radius: 4px;
`;

export const InfoContainer = styled.View`
  height: 70px;
  width: 100%;
  padding-left: 15px;
  margin-top: 10px;
`;

export const Rate = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${({rating}) => (rating > 5 ? 'green' : 'red')};
  margin-right: 5px;
`;
export const Rank = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${({ranking}) => (ranking > 30 ? 'red' : 'green')};
`;
export const Info = styled.Text`
  font-size: 15px;
  padding: 0 5px;
  margin-left: 4px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  color: #faffff;
  font-weight: bold;
`;

export const GenreContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  display: ${({isRating}) => (isRating ? 'flex' : 'none')};
  color: #333;
  font-weight: bold;
  background: gold;
  padding: 2px;
  margin-right: 3px;
  border-radius: 4px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
