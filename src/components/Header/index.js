import React from 'react';
import {Container, Title} from './styles';

export default function Header({name, children}) {
  return (
    <Container>
      {children}
      <Title>{name}</Title>
    </Container>
  );
}
