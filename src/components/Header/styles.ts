import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 141px;
  background-color: ${({theme}) => theme.colors.header};
  
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
`;

export const Content = styled.View`
  width: 100%;
  margin-bottom: -25px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.background_secondary};

  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};

  margin-bottom: 15px;
`;

export const TrainContent = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 10} 
})`
  width: 100%;
`;

export const TrainButton = styled(RectButton)`
  background-color: ${({theme, isActive}) => isActive ? theme.colors.main :  theme.colors.shape_dark};

  height: 50px;
  width: 140px;

  border-radius: 10px;
  margin-right: 10px;

  align-items: center;
  justify-content: center;
`;

export const TrainButtonText = styled.Text`
  color: ${({theme}) => theme.colors.background_secondary};

  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};

`;

