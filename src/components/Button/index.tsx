import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
};
