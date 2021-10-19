import React, {useEffect, useState, useCallback} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../../router/stack.routes';
import { useNavigation, useRoute } from '@react-navigation/core';
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    observation: string;
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
  const { createExercise, editExercise} = useTraining();
  
  const [isEnabled, setIsEnabled] = useState(false);

  const [storageWeight, setStorageWeight] = useState(null); 
  const [storageRepeat, setStorageRepeat] = useState(null); 
  const [storageSeries, setStorageSeries] = useState(null); 
 
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
  
  async function handleMaxNumber(type, value){
  let formattedValue

  if(value <= 0){
    formattedValue = 1
  }else if(value >= 500){
    formattedValue = 500;
  }else {
    formattedValue = value
  }

   switch(type){
     case 'weight': {
      await AsyncStorage.setItem("@workPlan:maxWeight", JSON.stringify(formattedValue));
      setStorageWeight(formattedValue);
      break;
     }
     case 'repeat': {
      await AsyncStorage.setItem("@workPlan:maxRepeat", JSON.stringify(formattedValue));
      setStorageRepeat(formattedValue);
      break;
     }
     case 'series': {
      await AsyncStorage.setItem("@workPlan:maxSeries", JSON.stringify(formattedValue));
      setStorageSeries(formattedValue);
      break;
     }
   }
  }

  async function loadStorage(){
    const weight = await AsyncStorage.getItem('@workPlan:maxWeight');
    const repeat = await AsyncStorage.getItem('@workPlan:maxRepeat');
    const series = await AsyncStorage.getItem("@workPlan:maxSeries");
    
    const formattedWeight = JSON.parse(weight); 
    const formattedRepeat = JSON.parse(repeat); 
    const formattedSeries = JSON.parse(series); 

    if(formattedWeight){
      setStorageWeight(formattedWeight);
    }
    if(formattedRepeat){
      setStorageRepeat(formattedRepeat);
    }
    if(formattedSeries){
      setStorageSeries(formattedSeries);
    }
  }

  useEffect(() => {
    loadStorage();
  }, [isEnabled])

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Container>
      <Header 
        allowEditable 
        title={exercise ? 'Editar exercício' : 'Criar exercício'} 
        isInternalScreen
        isEnabled={isEnabled} 
        toggleSwitch={toggleSwitch}
      />

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
          isEditable={isEnabled}
          onChangeMaxNumber={(value) => handleMaxNumber('weight', value)}
          maxNumber={storageWeight}
        />
        <InputForm
          title="repetições"
          control={control}
          icon='repeat'
          name='repeat'
          type='number'
          defaultNumberValue={exercise?.repeat}
          isEditable={isEnabled}
          onChangeMaxNumber={(value) => handleMaxNumber('repeat', value)}
          maxNumber={storageRepeat}
        />
        <InputForm
          title="series"
          control={control}
          icon='replay'
          name='series'
          type='number'
          defaultNumberValue={exercise?.series}
          isEditable={isEnabled}
          onChangeMaxNumber={(value) => handleMaxNumber('series', value)}
          maxNumber={storageSeries}
        />
        <InputForm
          title="obeservação"
          control={control}
          icon='format-text'
          name='observation'
          type='text'
          defaultValue={exercise?.observation}
        />
        {/* <InputForm
          title="tempo"
          control={control}
          icon='clock-time-eight-outline'
          name='time'
          type='number'
          defaultNumberValue={exercise?.time}
          isEditable={isEnabled}
          onChangeMaxNumber={handleMaxNumber}
        /> */}

        <Button
          onPress={handleSubmit(handleCreateTraining)}
        >
          {exercise ? 'Editar exercício' : 'Criar exercício'}
        </Button>
      </Content>
    </Container>
  );
};


