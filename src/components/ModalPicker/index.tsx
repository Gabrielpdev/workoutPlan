import React from 'react';
import { Text } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import { Container, CustomModalContainer, Modal } from './styles';

// interface ModalPickerProps {
//   children: ReactNode;
// }

const data = Array.from({ length: 100 }, (v, k) => k + 1);

export function ModalPicker({
  active,
  onActive,
  onChangeValue
}) {
  return (
    <Modal
      transparent
      visible={active}
      onRequestClose={onActive}
    >
      <CustomModalContainer
        onPress={onActive}
      />

      <Container>
        <ScrollPicker
          dataSource={data}
          selectedIndex={1}
          renderItem={(data) => (
            <Text>{data}</Text>
          )}
          onValueChange={(data) => {
            onChangeValue(data)
          }}
          // wrapperBackground='#FFFFFF'
          itemHeight={50}
          highlightColor='#d8d8d8'
          highlightBorderWidth={2}
        />
        {/* <Text>ModalPicker</Text> */}
      </Container>
    </Modal>
  );
};