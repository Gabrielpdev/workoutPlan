import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
// import { ScrollView } from 'react-native';
import { Button as ConfirmButton } from '../../components/Button';

export const Container = styled.View`
  width: 100%;
  flex:1;
`;

export const Content = styled(FlatList).attrs({
  contentContainerStyle: { 
    paddingTop: 40,
  }
})`
  padding: 0 16px;
  /* height: 80%; */
`;

export const Button = styled(ConfirmButton)``;

export const Footer = styled.View`
  width: 100%;

  padding: 24px 16px ${getBottomSpace() + 24}px;
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;