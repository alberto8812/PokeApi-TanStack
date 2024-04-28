import {pokeApi} from '../../config/api/pokeApi';
import {PokemonEntity} from '../../domain/entities/pokemon';
import type {
  PokeAPIPaginateResponse,
  PokeAPIPokemon,
} from '../../insfractructure/interfaces/pokeApi.interfaces';
import {PokemonMapper} from '../../insfractructure/mappers/Pokenon.mapper';

export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<PokemonEntity[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
    const {data} = await pokeApi.get<PokeAPIPaginateResponse>(url);
    const pokemonPromises = data.results.map(info => {
      return pokeApi.get<PokeAPIPokemon>(info.url);
    });

    const pokeApiPokemon = await Promise.all(pokemonPromises);
    const pokemons = pokeApiPokemon.map(item =>
      PokemonMapper.PokemonApiPokemonToEntity(item.data),
    );
    return pokemons;
  } catch (error) {
    throw new Error('e=wRROR GETTING POKEMONS');
  }
};
