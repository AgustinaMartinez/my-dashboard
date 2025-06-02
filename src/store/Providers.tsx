"use client";

import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { FavoritePokemons, setFavoritePokemons } from "./pokemon/pokemonSlice";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites: FavoritePokemons = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
