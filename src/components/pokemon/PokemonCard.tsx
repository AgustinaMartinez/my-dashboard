"use client";

import { Pokemon } from "@/models/pokemons";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemon/pokemonSlice";
import Image from "next/image";
import Link from "next/link";
import { IoFlameOutline, IoHeart, IoHeartOutline } from "react-icons/io5";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispach = useAppDispatch();
  const onToggle = () => dispach(toggleFavorite(pokemon));

  return (
    <div className="mx-auto mt-2 w-36 md:w-60">
      <div className="bg-gray-700 rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center p-4 md:p-6 bg-gray-900">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={`Pokemon ${name}`}
            width={50}
            height={50}
            priority={false}
            className="w-auto h-26 md:h-40 hover:scale-110 transition-transform duration-300"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-3 md:px-4 text-xs font-semibold text-pink-500 flex items-center gap-2 hover:text-gray-50 hover:border-gray-50 hover:bg-gray-800 duration-300"
            >
              <IoFlameOutline size={20} className="text-pink-500" />
              <span className="hidden md:flex">Leer características</span>
              <span className="flex md:hidden">Leer más</span>
            </Link>
          </div>
        </div>
        <div className="">
          <div
            className="px-4 py-2 hover:bg-gray-600 flex items-center cursor-pointer"
            onClick={onToggle}
          >
            <div className="text-red-600">
              {isFavorite ? (
                <IoHeart className="text-pink-500" />
              ) : (
                <IoHeartOutline className="text-pink-500" />
              )}
            </div>
            <div className="md:pl-3 pl-2">
              <p className="text-sm font-medium text-gray-400 leading-none">
                {isFavorite ? "Es favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-50 mt-1">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
