import { IoHeartOutline } from "react-icons/io5";

export const NoFavorites = () => (
  <div className="flex flex-col h-[50vh] items-center justify-center">
    <IoHeartOutline size={100} className="text-red-500" />
    <span>No hay favoritos</span>
  </div>
);
