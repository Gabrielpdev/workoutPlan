import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { ActivityIndicator, TextInputProps } from 'react-native';

import { ModalPicker } from '../ModalPicker';

import { 
  Container,
  TitleContainer,
  MaxNumber,
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
  defaultValue?: string;
  defaultNumberValue?: string | number;
  maxNumber?: number;
  onChangeMaxNumber?: (type: string, value: string) => Promise<void>;
  isEditable?: boolean;
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
  maxNumber,
  onChangeMaxNumber,
  isEditable = false,
  ...rest 
}: InputProps) {
  const theme = useTheme()

  const [openModal, setOpenModal] = useState(false);
  const [numberValue, setNumberValue] = useState(defaultNumberValue);

  const [isLoading, setIsLoading] = useState(false);
  
  function handleModal(){
    setIsLoading(!isLoading)
    setOpenModal(!openModal)
  }

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        {!!maxNumber && (<MaxNumber>{`max: ${maxNumber}`}</MaxNumber>)}
      </TitleContainer>
      <Content>
        <MaterialCommunityIcons name={icon || 'cake'} size={24} color={theme.colors.text} />
        <Separator />
        {type === 'number' ? (
          <>
          <Controller
            defaultValue={numberValue}
            name={name}
            control={control}
            render={({field: { onChange }}) => (
              <>
                <OpenModal onPress={handleModal}>
                  <ModalPicker
                    maxNumber={maxNumber}
                    defaultValue={numberValue}
                    active={openModal}
                    onActive={handleModal}
                    onChangeValue={(value) => {
                      setNumberValue(value);
                      onChange(value);
                    }}
                  />
                  {isLoading ? (
                    <ActivityIndicator size="small" color={theme.colors.text} />
                  ) : (
                    <Value>{name === 'weight' ? `${numberValue} kg` : numberValue}</Value>
                  )}
                </OpenModal>
              </>
            )}
          />
          {isEditable && (
            <>
              <Separator />
              <Input
                keyboardType="numeric"
                value={maxNumber?.toString()}
                onChangeText={onChangeMaxNumber}
                style={{ height: 60}}
                {...rest}
              />
            </>
          )}
          </>
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
