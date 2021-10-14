import React  from 'react';
import { View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTraining } from '../../hooks/training';

import { StackParamList } from '../../router/stack.routes';

import { 
  Container, 
  BackButton,
  Title, 
  Switch, 
  Content,
  TrainContent, 
  TrainButton, 
  TrainButtonText,
} from './styles';

interface HeaderProps {
  title: string;
  isInternalScreen?: boolean;
  isEnabled?: boolean;
  toggleSwitch?: () => void;
}

type headerScreenProp = NativeStackNavigationProp<StackParamList, 'CreateTraining'>;

export function Header({ title, isInternalScreen = false, isEnabled, toggleSwitch }: HeaderProps) {
  const navigation = useNavigation<headerScreenProp>();
  const { trainings, selectedTraining, trainingSelected } = useTraining();

  function handleSelectTraining(id: string){
    selectedTraining(id)
  }

  function handleCreateTraining(){
    navigation.navigate('CreateTraining');
  }

  return (
    <Container isInternalScreen={isInternalScreen}>
      {isInternalScreen && (
        <BackButton onPress={() => navigation.goBack()} >
          <SimpleLineIcons name="arrow-left" size={20} color="white" />
        </BackButton>
      )}
      <Title >{title}</Title>

      {!isInternalScreen && (<Switch 
        isEnabled={isEnabled}
        toggleSwitch={toggleSwitch}
      />)}

      <Content>
        {!isInternalScreen &&(
          <TrainContent>
            {trainings.map(training => (
              <View
                key={training.id}
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 1,
                    height: 2,
                  },
                  shadowOpacity: 0.28,
                  shadowRadius: 10,
          
                  elevation: 4,
                  marginBottom: 5,
                  borderRadius: 10,
                  paddingBottom: 0,
                  marginRight: 10,
                }}
              >
                <TrainButton 
                  onPress={() => handleSelectTraining(training.id)}
                  isActive={trainingSelected.id === training.id}
                >
                  <TrainButtonText>
                    {training.title}
                  </TrainButtonText>
                </TrainButton>
              </View>
            ))}
            <View
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 0.28,
                shadowRadius: 3,
        
                elevation: 4,
                marginBottom: 4,
                borderRadius: 10,
                paddingBottom: 5,
              }}
            >
              <TrainButton 
                isActive
                onPress={handleCreateTraining}
              >
                <TrainButtonText>
                  +
                </TrainButtonText>
              </TrainButton>
            </View>
          </TrainContent>
        )}
      </Content>
    </Container>
  );
};