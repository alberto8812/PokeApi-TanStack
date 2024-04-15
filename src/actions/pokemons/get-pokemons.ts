import { pokeApi } from "../../config/api/pokeApi";
import { Pokemon, PokemonEntity } from "../../domain/entities/pokemon";


export const getPokemons=async():Promise<PokemonEntity[]>=>{

    try {
        const url='/pokemon'
        const {data}=await pokeApi.get(url);
        console.log(data)
        return data
    } catch (error) {
        throw new Error('e=wRROR GETTING POKEMONS')
        
    }
}