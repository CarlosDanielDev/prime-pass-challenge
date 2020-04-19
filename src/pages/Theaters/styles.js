import styled from 'styled-components/native';

export const CenterTitle = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  background: #faffff;
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
export const TouchIcon = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
export const ContainerTheater = styled.View`
  border: 1px solid #ddd;
  width: 95%;
  height: 73px;
  margin: 10px;
  border-radius: 4px;
  background: #faffff;
  justify-content: flex-start;
  flex-direction: row;
`;
export const TitleFlat = styled.Text`
  color: #290c00;
  font-weight: bold;
  font-size: 22px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const Title = styled.Text`
  font-weight: bold;
  color: #290c00;
  font-size: 15px;
`;

export const Info = styled.Text`
  margin-top: 5px;
  font-size: 13px;
  color: #290c00;
`;

export const ContainerAddress = styled.View`
  margin-top: 5px;
  justify-content: flex-start;
  width: 80%;
  margin-right: 5px;
`;

export const ContainerImage = styled.View`
  flex: 1;
  border-radius: 4px;
  width: 60px;
  height: 60px;
  margin: 5px 0 0 5px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 3px;
`;
