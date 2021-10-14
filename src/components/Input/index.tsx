import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

import { ModalPicker } from '../ModalPicker';

import { 
  Container,
  Title,
  Content,
  Separator,
  Input,
  OpenModal,
  Value,
  Error,
} from './styles';

interface InputProps extends TextInputProps{
  control : Control;
  title: string;
  name: any;
  icon: string;
  error?: string;
  type: 'number' | 'text' ;
  defaultValue?: string | number;
  defaultNumberValue?: string | number
}

export function InputForm({ 
  title, 
  icon, 
  control, 
  name, 
  type, 
  error, 
  defaultValue = '', 
  defaultNumberValue = 1, 
  ...rest 
}: InputProps) {
  const theme = useTheme()

  const [openModal, setOpenModal] = useState(false);
  const [numberValue, setNumberValue] = useState(defaultNumberValue);

  function handleModal(){
    setOpenModal(!openModal)
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <MaterialCommunityIcons name={icon || 'cake'} size={24} color={theme.colors.text} />
        <Separator />
        {type === 'number' ? (
          <Controller
            defaultValue={numberValue}
            name={name}
            control={control}
            render={({field: { onChange }}) => (
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
            defaultValue={defaultValue}
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
      {error && <Error>{error}</Error>}
    </Container>
  );
};
