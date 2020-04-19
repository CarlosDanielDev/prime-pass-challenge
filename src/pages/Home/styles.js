import styled from 'styled-components/native';

export const Container = styled.View`
  background: #800000;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  background: #faffff;
  border-radius: 4px;
  width: 300px;
  height: 300px;
`;

export const Title = styled.Text`
  color: #290c00;
  font-weight: bold;
  font-size: 30px;
`;

export const Pick = styled.Picker`
  background: #eee;
  width: 190px;
  height: 44px;
  border: 1px solid #290c00;
  border-radius: 50px;
`;
export const ButtonText = styled.Text`
  color: #f0ffff;
  font-size: 15px;
  font-weight: bold;
  margin-right: 8px;
`;
export const Label = styled.Text`
  color: #290c00;
  font-weight: bold;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 3px;
`;
export const Button = styled.TouchableOpacity`
  background: #800000;
  border-radius: 4px;
  width: 190px;
  height: 44px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContainerPick = styled.View`
  /* padding: 5px 0 5px 0; */
  align-items: flex-start;
  justify-content: flex-start;
`;
