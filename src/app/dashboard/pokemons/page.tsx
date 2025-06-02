import { getPokemons } from "@/services/pokemons";
import { PokemonsGrid } from "@/components/pokemon";

export const metadata = {
  title: "Pokemons",
  description: "Página que muestra un listado de pokemons",
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);
  return (
    <div className="p-4 flex flex-col items-center justify-center w-full h-full gap-4">
      <h1 className="text-5xl">Lista de Pokemons</h1>
      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
