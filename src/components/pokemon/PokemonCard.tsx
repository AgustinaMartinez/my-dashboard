"use client";

import { Pokemon } from "@/models/pokemons";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemon/pokemonSlice";
import Image from "next/image";
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispach = useAppDispatch();
  const onToggle = () => dispach(toggleFavorite(pokemon));

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center p-6 bg-gray-800">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={`Pokemon ${name}`}
            width={50}
            height={50}
            priority={false}
            className="w-auto h-40"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Leer más...
            </Link>
          </div>
        </div>
        <div className="">
          <div
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={onToggle}
          >
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Es favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
