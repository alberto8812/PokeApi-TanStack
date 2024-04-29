import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import {getPokemons} from '../../../actions/pokemons';
import {useQuery} from '@tanstack/react-query';
import {PokeballBg} from '../../components/ui/PokeballBg';
import {FlatList} from 'react-native-gesture-handler';
import {globalThem} from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/pokemons/pokemonCard';

export const HomeScreen = () => {
  const {top}=useSafeAreaInsets();
  const {isLoading, data: pokemons = []} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 100 * 60 * 60, // 60 minutos
  });

  return (
    <View style={globalThem.globalMargin}>
      <PokeballBg style={style.imgPosition} />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        ListHeaderComponent={() => <Text variant="displayMedium">Pokedex</Text>}
        style={{marginTop:top+20}}
        renderItem={({item:pokemon})=>(
          <PokemonCard pokemon={pokemon}/>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
