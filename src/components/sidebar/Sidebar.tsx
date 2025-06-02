import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeart,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={30} />,
    title: "Dashboard",
    subtitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={30} />,
    title: "Counter",
    subtitle: "Contador client side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={30} />,
    title: "Pokemons",
    subtitle: "Generación estática",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeart size={30} />,
    title: "Favoritos",
    subtitle: "Global state",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0"
      style={{ width: "400px" }}
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white">
          <span>Dashboard</span>
          <span className="text-blue-500">
            <IoLogoReact />
          </span>
        </h1>
        <p className="text-slate-500 text-sm">Curso de Next.js 13+</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenida,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://avatars.githubusercontent.com/u/53585453?v=4"
              alt="User Avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Agustina Martínez
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
