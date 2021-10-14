import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../router/stack.routes';
import { useNavigation } from '@react-navigation/core';
import { v1 } from 'uuid';

import { useTraining } from '../../hooks/training';

import { Header } from '../../components/Header';
import { InputForm } from '../../components/Input';

import { Container, Content, Button } from './styles';

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório'),
 })

 type createExerciseScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function CreateExercise() {
  const navigation = useNavigation<createExerciseScreenProp>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const { createExercise } = useTraining();


  function handleCreateTraining(form){
    let formattedData = {
      id: v1(), 
      isCompleted: false, 
      ...form
    };

    for (const [key, value] of Object.entries(form)) {
      if (typeof value === typeof undefined) {
        formattedData[key] = 1
      }
    }

    createExercise(formattedData);
    reset();
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Header title='Treinos' isInternalScreen />

      <Content>
        <InputForm
          title="nome"
          control={control}
          icon='format-text'
          name='name'
          type='text'
          error={errors.name && errors.name.message}
        />
        <InputForm
          title="peso"
          control={control}
          icon='weight-lifter'
          name='weight'
          type='number'
          // value={weight}
        />
        <InputForm
          title="repetições"
          control={control}
          icon='repeat'
          name='repeat'
          type='number'
          // value={repeat}
        />
        <InputForm
          title="series"
          control={control}
          icon='replay'
          name='series'
          type='number'
          // value={series}
        />
        <InputForm
          title="tempo"
          control={control}
          icon='clock-time-eight-outline'
          name='time'
          type='number'
        />

        <Button
          onPress={handleSubmit(handleCreateTraining)}
        >
          Criar exercício
        </Button>
      </Content>
    </Container>
  );
};


