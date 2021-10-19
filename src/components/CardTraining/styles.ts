import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({theme, isCompleted}) => isCompleted ? theme.colors.success_light : theme.colors.background_secondary};
  padding: 15px;
  border-radius: 6px;
  border: 0;
  margin-bottom: 10px;
`;

export const Header  = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: ${({theme, isCompleted}) => isCompleted ? theme.colors.success: theme.colors.text};

  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.secondary_600};
`;

export const ButtonsContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  width: 60px;
  right: 0px;
`;

export const DeleteButton = styled(BorderlessButton)``;

export const EditButton = styled(BorderlessButton)``;

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
  color: ${({theme, isCompleted}) => isCompleted ? theme.colors.success: theme.colors.text};

  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.secondary_500};
`;

export const ContentDataText = styled.Text`
  color: ${({theme, isCompleted}) => isCompleted ? theme.colors.success: theme.colors.text};

  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.secondary_400};
`;

// export const ObservationWrapper = styled.Text`
//   width: 100%;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   margin-top: 10px;
//   text-align: center;
// `;
