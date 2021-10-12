import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { ModalPicker } from '../ModalPicker';

import { 
  Container,
  Title,
  Content,
  Separator,
  Input,
  OpenModal,
  Value,
} from './styles';

interface InputProps {
  control : Control;
  title: string;
  name: string;
  icon: string;
  type: 'number' | 'text' ;
}

export function InputForm({ title, icon, control, name, type, ...rest }: InputProps) {
  const theme = useTheme()

  const [openModal, setOpenModal] = useState(false);
  const [numberValue, setNumberValue] = useState(1);

  function handleModal(){
    setOpenModal(!openModal)
  }


  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <MaterialCommunityIcons name={icon} size={24} color={theme.colors.text} />
        <Separator />
        {type === 'number' ? (
          <Controller
            name={name}
            control={control}
            render={({field: { onChange}}) => (
              <>
                <OpenModal onPress={handleModal}>
                  <ModalPicker 
                    active={openModal}
                    onActive={handleModal}
                    onChangeValue={(value) => {
                      setNumberValue(value);
                      onChange(value);
                    }}
                  />
                  <Value>{name === 'weight' ? `${numberValue} kg` : numberValue}</Value>
                </OpenModal>
              </>
            )}
          />
        ) : (
          <Controller
            name={name}
            control={control}
            render={({field: { onChange, value}}) => (
              <Input
                value={value}
                onChangeText={onChange}
                {...rest}
              />
            )}
          />
        )}
      </Content>
    </Container>
  );
};
