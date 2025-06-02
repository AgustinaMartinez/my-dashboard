import { Pokemon } from "@/models/pokemons";
import { PokemonCard } from "./PokemonCard";

interface PokemonsGridProps {
  pokemons: Pokemon[];
}

export const PokemonsGrid = ({ pokemons }: PokemonsGridProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
