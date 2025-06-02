import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

export const favorites = (state: RootState) => state.pokemons.favorites;

export const modifiedFavorites = createSelector(
  [favorites],
  (favorites) => Object.values(favorites)
);
