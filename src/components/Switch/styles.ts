import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.background_secondary};

  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.secondary_400};

`;
