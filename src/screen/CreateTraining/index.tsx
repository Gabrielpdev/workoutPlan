import React from 'react';
import { useForm } from 'react-hook-form';

import { Header } from '../../components/Header';
import { InputForm } from '../../components/Input';

import { Container, Content, Button } from './styles';

export function CreateTraining() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  function handleSubmitTraining(form){
    console.log(form);
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
          onPress={handleSubmit(handleSubmitTraining)}
        >
          Criar exercício
        </Button>
      </Content>
    </Container>
  );
};
