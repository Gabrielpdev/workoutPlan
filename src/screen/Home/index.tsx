import React, { useState }  from 'react';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamList } from '../../router/stack.routes';

import { Header } from '../../components/Header';
import { CardTraining } from '../../components/CardTraining';

import { Container, Content, Button, Footer } from './styles';

let lastPress = 0;
type homeScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation<homeScreenProp>();

  const data = [1,2,3,4,5,6]

  const onDoublePress = () => {
    const time = new Date().getTime();
    const delta = time - lastPress;

    const DOUBLE_PRESS_DELAY = 300;
    if (delta < DOUBLE_PRESS_DELAY) {
      // Success double press
      console.log('double press');
    }
    lastPress = time;
  };

  function handleAddTraining(){
    navigation.navigate('CreateTraining');
  }

  return (
    <Container>
      <Header title='Treinos' isEnabled={isEnabled} toggleSwitch={toggleSwitch} />

      <Content
        showsVerticalScrollIndicator={false} 
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={({ item, index }) => (
          <CardTraining
            data={item}
            onDoublePress={onDoublePress}
            isEditMode={isEnabled}
            isCompleted={index % 2 === 0}
          />
        )}
      />

      {isEnabled && (<Footer>
        <Button
          onPress={handleAddTraining}
        >
          Adicionar exercício
        </Button>
      </Footer>)}
    </Container>
  );
};
