import React  from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Header } from '../../components/Header';
import { CardTraining } from '../../components/CardTraining';

import { Container, Content, Button } from './styles';
import { Dimensions, FlatList, Platform, StatusBar } from 'react-native';

const hasNotch = () => {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight > 24
  }
  return false;
}
const deviceHeight = hasNotch() ? 25 + getStatusBarHeight() : 45

export function Home() {
  const data = [1,2,3,4,5,6]

  return (
    <Container>
      <Header title='Treinos' />

      <Content>
        <FlatList
          contentContainerStyle={{
            paddingTop: 50,
          }}
          style={{
            height: hasNotch() ? RFPercentage(90) : RFPercentage(83), 
          }}
          showsVerticalScrollIndicator={false} 
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item, index }) => (
            <>
            <CardTraining />
            {index === data.length - 1 && (
              <Button>
                Adicionar exercício
              </Button>
            )}
            </>
          )}
        />

        
      </Content>
    </Container>
  );
};
