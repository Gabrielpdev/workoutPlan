import React  from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackParamList } from '../../router/stack.routes';

import { 
  Container, 
  Header, 
  Title,
  ButtonsContent,
  DeleteButton,
  EditButton,
  ContentWrapper,
  ContentData,
  ContentDataTitle,
  ContentDataText,
 } from './styles';
import { useTraining } from '../../hooks/training';

type cardTrainingScreenProp = NativeStackNavigationProp<StackParamList, 'CreateExercise'>;

interface ExerciseProps {
  id: string;
  title: string;
  weight: string;
  repeat: string;
  series: string;
  time: string;
}

export function CardTraining({
  data,
  onDoublePress,
  isEditMode,
  isCompleted
}) {
  const { deleteExercise } = useTraining();
  const theme = useTheme();
  const navigation = useNavigation<cardTrainingScreenProp>();

  function handleDeleteExercise(id: string, name: string){
    Alert.alert(
      `Deseja deletar ${name}`,
      `Deseja realmente deletar este exercício`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => deleteExercise(id),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {}
      }
    );
  }

  function handleEditExercise(exercise: ExerciseProps){
    navigation.navigate('CreateExercise', { exercise });
  }

  return (
    <Container
      isCompleted={isCompleted}
      onPress={() => onDoublePress(data.id)}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
      }}
    >
      <View>
        <Header>
          <MaterialCommunityIcons 
            name="checkbox-marked-circle-outline" 
            size={25} 
            color={isCompleted ? theme.colors.success : 'transparent'} 
          />

          <Title isCompleted={isCompleted}>{data.name}</Title>

          {isEditMode && (
            <ButtonsContent>
              <EditButton
                onPress={() => handleEditExercise(data)}
              >
                <MaterialCommunityIcons 
                  name="circle-edit-outline" 
                  size={25} 
                  color="#dba904"
                />
              </EditButton>
              <DeleteButton
                onPress={() => handleDeleteExercise(data.id, data.name)}
              >
                <MaterialCommunityIcons 
                  name="delete-circle-outline" 
                  size={28} 
                  color="#d9435c" 
                />
              </DeleteButton>
            </ButtonsContent>
          )}
          <View style={{ height: 25, width: 25 }} />
        </Header>
      
        <ContentWrapper>
          <ContentData>
            <ContentDataTitle isCompleted={isCompleted}>PESO</ContentDataTitle>
            <ContentDataText isCompleted={isCompleted}>{`${data.weight} kg`}</ContentDataText>
          </ContentData>

          <ContentData>
            <ContentDataTitle isCompleted={isCompleted}>REPETIÇÕES</ContentDataTitle>
            <ContentDataText isCompleted={isCompleted}>{data.repeat}</ContentDataText>
          </ContentData>

          <ContentData>
            <ContentDataTitle isCompleted={isCompleted}>SERIES</ContentDataTitle>
            <ContentDataText isCompleted={isCompleted}>{data.series}</ContentDataText>
          </ContentData>
        </ContentWrapper>

         {!!data.observation && ( 
          <ContentData style={{marginTop: 10}} >
            <ContentDataTitle isCompleted={isCompleted}>OBSERVAÇÃO</ContentDataTitle>
            <ContentDataText isCompleted={isCompleted}>{data.observation}</ContentDataText>
          </ContentData>
        )}
      </View>
    </Container>
  );
};