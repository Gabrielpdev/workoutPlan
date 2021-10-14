import React, { useState }  from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { StackParamList } from '../../router/stack.routes';

import { Header } from '../../components/Header';
import { CardTraining } from '../../components/CardTraining';

import { 
  Container, 
  Content, 
  Button, 
  Footer, 
  NoTrainingSelectedMessage,
  NoExerciseMessage
} from './styles';
import { useTraining } from '../../hooks/training';

type homeScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

let lastPress = 0;
export interface DataListProps{
  id: string;
  title: string;
}

export function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation<homeScreenProp>();
  const { trainingSelected, completeExercise } = useTraining();

  const onDoublePress = (id: string) => {
    const time = new Date().getTime();
    const delta = time - lastPress;

    const DOUBLE_PRESS_DELAY = 300;
    if (delta < DOUBLE_PRESS_DELAY) {
      // Success double press
      completeExercise(id)
      // console.log(id);
    }
    lastPress = time;
  };

  function handleAddExercise(){
    navigation.navigate('CreateExercise');
  }

  return (
    <Container>
      <Header title='Treinos' isEnabled={isEnabled} toggleSwitch={toggleSwitch} />

      {!trainingSelected.id ? (
        <NoTrainingSelectedMessage>
          Nenhum treino selecionado
        </NoTrainingSelectedMessage>
      ) : trainingSelected?.exercises?.length === 0 ? (
        <NoExerciseMessage>
          Nenhum exercício cadastrado
        </NoExerciseMessage>
      )  : (
        <Content
          showsVerticalScrollIndicator={false} 
          data={trainingSelected.exercises}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardTraining
              data={item}
              onDoublePress={onDoublePress}
              isEditMode={isEnabled}
              isCompleted={item.isCompleted}
            />
          )}
        />
      )}

      {isEnabled && (
        <Footer>
          <Button
            onPress={handleAddExercise}
          >
            Adicionar exercício
          </Button>
        </Footer>
      )}
    </Container>
  );
};
