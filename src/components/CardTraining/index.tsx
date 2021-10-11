import React  from 'react';
import { View } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { StackParamList } from '../../routes/stack.routes';

// import Header from '../../components/Header';

import { 
  Container, 
  Header, 
  Title, 
  ContentWrapper,
  ContentData,
  ContentDataTitle,
  ContentDataText,
 } from './styles';

// type homeScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;
let lastPress = 0;

export function CardTraining() {
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

  return (
    <Container
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
          <Title>SUPINO RETO</Title>
        </Header>
      
        <ContentWrapper>
          <ContentData>
            <ContentDataTitle>PESO</ContentDataTitle>
            <ContentDataText>13 kg</ContentDataText>
          </ContentData>

          <ContentData>
            <ContentDataTitle>REPETIÇÕES</ContentDataTitle>
            <ContentDataText>13</ContentDataText>
          </ContentData>

          <ContentData>
            <ContentDataTitle>SERIES</ContentDataTitle>
            <ContentDataText>4</ContentDataText>
          </ContentData>
        </ContentWrapper>
      </View>
    </Container>
  );
};