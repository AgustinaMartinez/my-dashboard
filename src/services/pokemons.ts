import { Pokemon, PokemonDetail, PokemonsList } from "@/models/pokemons";
import { notFound } from "next/navigation";

export const getPokemons = async (limit = 20, offset = 0): Promise<Pokemon[]> => {
  const data: PokemonsList = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  const pokemons: Pokemon[] = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export const getPokemon = async (id: string): Promise<PokemonDetail> => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then((res) => res.json());
    return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
};

export const getPokemonByName = async (name: string): Promise<PokemonDetail> => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    }).then((res) => res.json());
    return data;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (error) {
    notFound();
  }
};