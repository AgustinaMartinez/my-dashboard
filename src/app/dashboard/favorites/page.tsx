import { FavoritePokemons } from "@/components";
import Image from "next/image";

export const metadata = {
  title: "Favoritos",
  description: "Página que muestra un listado de pokemons favoritos",
};

const FavoritePokemonsPage = async () => {
  return (
    <div className="p-4 flex flex-col items-center w-full h-full gap-4">
      <div className="flex gap-4">
        <Image
          src="/pokeball.webp"
          alt="Pokeball"
          width={50}
          height={30}
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        />
        <h1 className="text-2xl md:text-5xl">Lista de favoritos</h1>
        <Image
          src="/pokeball.webp"
          alt="Pokeball"
          width={50}
          height={30}
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        />
      </div>

      <FavoritePokemons />
    </div>
  );
};

export default FavoritePokemonsPage;
