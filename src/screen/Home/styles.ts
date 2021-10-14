import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
// import { ScrollView } from 'react-native';
import { Button as ConfirmButton } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';

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

export const NoTrainingSelectedMessage = styled.Text`
  flex: 1;
  margin-top: 100px;

  text-align: center;
  color: ${({theme}) => theme.colors.title};

  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};
`;

export const NoExerciseMessage = styled.Text`
  flex: 1;
  margin-top: 100px;
  
  text-align: center;
  color: ${({theme}) => theme.colors.title};

  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};
`;