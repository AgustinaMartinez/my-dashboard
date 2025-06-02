import { Pokemon } from '@/models/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavoritePokemons {
  [key: string]: Pokemon
}

interface PokemonState {
  favorites: FavoritePokemons
}

const initialState: PokemonState = { favorites: {} };

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<FavoritePokemons>) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<Pokemon>) {
      const pokemon = action.payload;
      if (!!state.favorites[pokemon.id]) {
        delete state.favorites[pokemon.id];
        return;
      }
      state.favorites[pokemon.id] = pokemon;
    }
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;