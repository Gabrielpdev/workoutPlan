import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { v1 } from 'uuid';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../router/stack.routes';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Header } from '../../components/Header';
import { InputForm } from '../../components/Input';

import { Container, Content, Button, DeleteContent, DeleteContentText } from './styles';
import { useTraining } from '../../hooks/training';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';

type createExerciseScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

const dataKey = '@workPlan:training'

const schema = Yup.object().shape({
  title: Yup
  .string()
  .required('Nome é obrigatório'),
 })

 interface Exercise {
  id: string;
  title: string;
  weight: string;
  repeat: string;
  series: string;
  time: string;
  isCompleted: boolean;
}
interface Trainings {
  id: string;
  title: string;
  exercises: Exercise[];
}
interface Params {
  trainingSelected: Trainings;
}

export function CreateTraining() {
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
  const { createTraining, editTraining, deleteTraining } = useTraining();

  if(params){
    var { trainingSelected } = params as Params;
  }

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

    if(trainingSelected){
      const dataFormatted = {
        ...trainingSelected,
        title: form.title,
      }

      editTraining(dataFormatted)

    }else{
      createTraining(dataFormatted);
    }

    reset();
    navigation.navigate('Home')
  }

  function handleDelete(id: string, name: string){
    Alert.alert(
      `Deseja deletar ${trainingSelected.title}`,
      `Deseja realmente deletar este treino`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteTraining(trainingSelected.id)
            navigation.navigate('Home')
          },
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {}
      }
    );
  }
  return (
    <Container>
      <Header title={trainingSelected ? 'Edição de treino' :'Criação de treino'} isInternalScreen />

      <Content>
        {trainingSelected && (
          <DeleteContent onPress={handleDelete} >
            <DeleteContentText>Deletar</DeleteContentText>
            <MaterialCommunityIcons 
              name="delete" 
              size={25} 
              color="#dc1637"
            />
          </DeleteContent>
        )}
        <InputForm
          title="nome do treino"
          control={control}
          icon='format-text'
          name='title'
          type='text'
          autoCapitalize='sentences'
          error={errors.title && errors.title.message}
          defaultValue={trainingSelected ? trainingSelected.title : ''}
        />

        <Button
          onPress={handleSubmit(handleCreateTraining)}
        >
          {trainingSelected ? 'Salvar' :'Criar treino'}
        </Button>
      </Content>
    </Container>
  );
};
