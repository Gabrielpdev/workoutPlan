import React, { useMemo } from 'react';
import { Text } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import { Container, CustomModalContainer, Modal } from './styles';

export function ModalPicker({
  active,
  onActive,
  onChangeValue,
  defaultValue,
  maxNumber
}) {
  const data = useMemo(() => {
    if(maxNumber <= 0 ){
      return [0];
    }else if (maxNumber > 500) {
      return Array.from({ length: 500 }, (_, k) => k + 1)
    } else {
      return Array.from({ length: maxNumber }, (_, k) => k + 1)
    }
  },[maxNumber])

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
          selectedIndex={defaultValue ? Number(defaultValue) - 1 : 0}
          renderItem={(data) => (
            <Text>{data}</Text>
          )}
          onValueChange={(data) => {
            onChangeValue(data)
          }}
          itemHeight={45}
          highlightColor='#d8d8d8'
          wrapperColor='#fff'
          highlightBorderWidth={4}
        />
      </Container>
    </Modal>
  );
};