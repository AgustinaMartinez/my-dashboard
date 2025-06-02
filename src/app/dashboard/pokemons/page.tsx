import { getPokemons } from "@/services/pokemons";
import { PokemonsGrid } from "@/components/pokemon";
import Image from "next/image";

export const metadata = {
  title: "Pokemons",
  description: "Página que muestra un listado de pokemons",
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);
  return (
    <div className="p-4 flex flex-col items-center justify-center w-full h-full gap-4">
      <div className="flex gap-4">
        <Image
          src="/pokeball.webp"
          alt="Pokeball"
          width={50}
          height={30}
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        />
        <h1 className="text-2xl md:text-5xl">Lista de Pokemons</h1>
        <Image
          src="/pokeball.webp"
          alt="Pokeball"
          width={50}
          height={30}
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        />
      </div>

      <PokemonsGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
