import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../router/stack.routes';
import { useNavigation, useRoute } from '@react-navigation/core';
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

interface Params {
  exercise: {
    id: string;
    name: string;
    weight: string;
    repeat: string;
    series: string;
    time: string;
  };
}


export function CreateExercise() {
  const { params } = useRoute();
  const navigation = useNavigation<createExerciseScreenProp>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const { createExercise, editExercise } = useTraining();
  
  if(params){
    var { exercise } = params as Params;
  }


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

    if(exercise){
      editExercise({
        isCompleted: false, 
        ...exercise,
        ...form
      })
    }else{
      createExercise(formattedData);
    }
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
          defaultValue={exercise?.name}
          error={errors.name && errors.name.message}
        />
        <InputForm
          title="peso"
          control={control}
          icon='weight-lifter'
          name='weight'
          type='number'
          defaultNumberValue={exercise?.weight}
        />
        <InputForm
          title="repetições"
          control={control}
          icon='repeat'
          name='repeat'
          type='number'
          defaultNumberValue={exercise?.repeat}
        />
        <InputForm
          title="series"
          control={control}
          icon='replay'
          name='series'
          type='number'
          defaultNumberValue={exercise?.series}
        />
        <InputForm
          title="tempo"
          control={control}
          icon='clock-time-eight-outline'
          name='time'
          type='number'
          defaultNumberValue={exercise?.time}
        />

        <Button
          onPress={handleSubmit(handleCreateTraining)}
        >
          {exercise ? 'Editar exercício' : 'Criar exercício'}
        </Button>
      </Content>
    </Container>
  );
};


