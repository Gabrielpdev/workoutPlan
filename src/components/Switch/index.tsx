import React from 'react';
import { useTheme } from 'styled-components';

import { Switch as SwitchRN } from 'react-native';

import { Container, Title } from './styles';

export function Switch({ isEnabled, toggleSwitch, style, ...rest }) {
  const theme = useTheme();

  return (
    <Container style={style}>
      <Title>Editar</Title>
      <SwitchRN
        trackColor={{ false: "#767577", true: theme.colors.title }}
        thumbColor={isEnabled ? theme.colors.main : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        {...rest}
      />
    </Container>
  );
};
