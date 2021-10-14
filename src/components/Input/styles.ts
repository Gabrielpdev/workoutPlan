import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 10px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  text-transform: uppercase;

  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.colors.background_secondary};
  border-radius: 4px;
  padding: 0 40px 0 20px;

  flex-direction: row;
  align-items: center;

`;

export const Separator = styled.View`
  width: 2px;
  height: 60px;
  background: ${({theme}) => theme.colors.background_primary};

  margin-left: 20px;
`;

export const Input = styled(TextInput)`
  /* background-color: ${({theme}) => theme.colors.main}; */
  width: 100%;
  
  padding: 18px;
`;

export const OpenModal = styled(RectButton)`
  width: 100%;
  height: 60px;

  justify-content: center;
`;

export const Value = styled.Text`
  margin-left: 30px;

  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.secondary_400};
`;

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.secondary_400};

  color: ${({theme}) => theme.colors.main};

  margin: 7px 0;
`;