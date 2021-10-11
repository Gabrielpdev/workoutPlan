import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background_secondary};
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const Header  = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};

  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};

  margin-bottom: 15px;
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const ContentData = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const ContentDataTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};

  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
`;

export const ContentDataText = styled.Text`
  color: ${({theme}) => theme.colors.text};

  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.secondary_400};
`;
