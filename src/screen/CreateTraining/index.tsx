import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { v1 } from 'uuid';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../router/stack.routes';
import { useNavigation } from '@react-navigation/core';

import { Header } from '../../components/Header';
import { InputForm } from '../../components/Input';

import { Container, Content, Button } from './styles';
import { useTraining } from '../../hooks/training';

type createExerciseScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

const dataKey = '@workPlan:training'

const schema = Yup.object().shape({
  title: Yup
  .string()
  .required('Nome é obrigatório'),
 })

export function CreateTraining() {
  const navigation = useNavigation<createExerciseScreenProp>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const { createTraining } = useTraining();

  async function handleCreateTraining(form){
    const data = await AsyncStorage.getItem(dataKey);
    const currentData = data ? JSON.parse(data) : [];

    const dataFormatted = [
      ...currentData,
      {
        id: v1(),
        title: form.title,
        exercises: []
      }
    ]

    createTraining(dataFormatted);

    reset();
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Header title='Criação de treino' isInternalScreen />

      <Content>
        <InputForm
          title="nome do treino"
          control={control}
          icon='format-text'
          name='title'
          type='text'
          autoCapitalize='sentences'
          error={errors.title && errors.title.message}
        />

        <Button
          onPress={handleSubmit(handleCreateTraining)}
        >
          Criar treino
        </Button>
      </Content>
    </Container>
  );
};
