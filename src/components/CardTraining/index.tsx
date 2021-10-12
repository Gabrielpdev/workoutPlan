import React  from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components';

// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { StackParamList } from '../../routes/stack.routes';

// import Header from '../../components/Header';

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

// type homeScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function CardTraining({
  data,
  onDoublePress,
  isEditMode,
  isCompleted
}) {
  const theme = useTheme();

  return (
    <Container
      isCompleted={isCompleted}
      onPress={onDoublePress}
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

          <Title isCompleted={isCompleted}>SUPINO RETO</Title>

          {isEditMode && (
            <ButtonsContent>
              <EditButton
                onPress={() => {console.log('123')}}
              >
                <MaterialCommunityIcons 
                  name="circle-edit-outline" 
                  size={25} 
                  color="#dba904"
                />
              </EditButton>
              <DeleteButton
                onPress={() => {console.log('123')}}
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
            <ContentDataText isCompleted={isCompleted}>13 kg</ContentDataText>
          </ContentData>

          <ContentData>
            <ContentDataTitle isCompleted={isCompleted}>REPETIÇÕES</ContentDataTitle>
            <ContentDataText isCompleted={isCompleted}>13</ContentDataText>
          </ContentData>

          <ContentData>
            <ContentDataTitle isCompleted={isCompleted}>SERIES</ContentDataTitle>
            <ContentDataText isCompleted={isCompleted}>4</ContentDataText>
          </ContentData>
        </ContentWrapper>
      </View>
    </Container>
  );
};