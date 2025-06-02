import { FavoritePokemons } from "@/components";

export const metadata = {
  title: "Favoritos",
  description: "Página que muestra un listado de pokemons favoritos",
};

const FavoritePokemonsPage = async () => {
  return (
    <div className="p-4 flex flex-col items-center w-full h-full gap-4">
      <h1 className="text-5xl">Lista de Pokemons favoritos</h1>
      <FavoritePokemons />
    </div>
  );
};

export default FavoritePokemonsPage;
