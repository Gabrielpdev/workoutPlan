import React  from 'react';
import { View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { StackParamList } from '../../routes/stack.routes';

// import Header from '../../components/Header';

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

// type homeScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

export function Header({ title, isInternalScreen = false, isEnabled, toggleSwitch }: HeaderProps) {
  const navigation = useNavigation();
  const data = [1,2,3,4,5,6]

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
            {data.map(teste => (
              <View
                key={teste}
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
                <TrainButton>
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
        )}
      </Content>
    </Container>
  );
};