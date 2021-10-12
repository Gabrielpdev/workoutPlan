import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  children: string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest} >
      <Title>{children}</Title>
    </Container>
  );
};
