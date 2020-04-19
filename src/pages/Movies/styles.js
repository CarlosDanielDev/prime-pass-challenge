import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fafafa;
`;
export const IconContent = styled.View`
  left: 5px;
  position: absolute;
`;
export const TouchIcon = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  padding: 10px 10px 5px 10px;
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#290c00',
})`
  flex: 1;
  height: 40px;
  background: #e6e6e6;
  border-radius: 4px;
  padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #800000;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${({loading}) => (loading ? 0.7 : 1)};
`;

export const MovieContainer = styled.View`
  width: 185px;
  height: 340px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Thumbnail = styled.Image`
  margin-top: 5px;
  width: 180px;
  height: 300px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #290c00;
  padding: 5px;
`;
export const ViewH = styled.ScrollView`
  flex-direction: row;
`;
