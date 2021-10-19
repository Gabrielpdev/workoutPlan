import styled from 'styled-components/native';
import { Button as ConfirmButton } from '../../components/Button';

export const Container = styled.View`
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Button = styled(ConfirmButton)`
  margin-top: 20px;
`;

export const DeleteContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const DeleteContentText = styled.Text``;