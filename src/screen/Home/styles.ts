import styled from 'styled-components/native';
// import { ScrollView } from 'react-native';
import { Button as ConfirmButton } from '../../components/Button';

export const Container = styled.View`
  width: 100%;
  flex:1;
`;

export const Content = styled.View`
  padding: 0 16px;
`;

export const Button = styled(ConfirmButton)`
  width: 100%;
  padding: 39px;
  background: red;
`;