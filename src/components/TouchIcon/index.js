import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';

export default function TouchIcon({children, action}) {
  return <Container onPress={action}>{children}</Container>;
}
