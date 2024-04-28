import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import {getPokemons} from '../../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';




export const HomeScreen = () => {
  const {isLoading,data}=useQuery({
    queryKey:['pokemons'],
    queryFn:()=>getPokemons(0),
    staleTime:100*60*60// 60 minutos
  })


  return (
    <View>
      <Text>HomeSCreen</Text>
      {
        isLoading ? <ActivityIndicator/>
        :
      (<Button mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>)
      }
    </View>
  );
};
