"use client";

import { useAppSelector } from "@/store";
import { PokemonsGrid } from "./PokemonsGrid";
import { NoFavorites } from "./NoFavorites";
import { modifiedFavorites } from "@/store/pokemon/pokemonSelectors";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(modifiedFavorites);

  return favoritePokemons.length === 0 ? (
    <NoFavorites />
  ) : (
    <PokemonsGrid pokemons={favoritePokemons} />
  );
};
