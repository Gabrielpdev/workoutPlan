import React  from 'react';
import { View } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { StackParamList } from '../../routes/stack.routes';

// import Header from '../../components/Header';

import { Container, Title, Content, TrainContent, TrainButton, TrainButtonText, } from './styles';

// type homeScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function Header({ title }) {

  const data = [1,2,3,4,5,6]

  return (
    <Container>
      <Title>{title}</Title>

      <Content>
        <TrainContent>
          {data.map(teste => (
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
                key={teste}
              >
                <TrainButtonText>
                  Treino A
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
            >
              <TrainButtonText>
                +
              </TrainButtonText>
            </TrainButton>
          </View>
        </TrainContent>
      </Content>
    </Container>
  );
};