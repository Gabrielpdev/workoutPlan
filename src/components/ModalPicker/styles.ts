import styled from 'styled-components/native';
import { Modal as ModalRN } from 'react-native';

export const Modal = styled(ModalRN)`
`;

export const Container = styled.View`
  position: absolute;
  background: white;
  padding: 20px 0;
  border-radius: 10px;

  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */

  top: 320px;
  left: 30px;

  /* border-radius: 15px; */

  width: 85%;
  height: 250px;

  /* height: 10px; */
  /* width: 100%; */
`;

export const CustomModalContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  top: 0;
  left: 0;

  /* height: 100%; */

  flex: 1;
  justify-content: center;
  align-items: center;
  /* display: flex; */
  /* z-index: -1; */

  background: rgba(0, 0, 0, 0.7);
`;