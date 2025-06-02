import Image from "next/image";
import { IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import menuItems from "./menuItems.json";

const Profile = () => (
  <div id="profile" className="px-2 md:px-6 lg:px-6 py-10 flex flex-col">
    <p className="text-slate-400 hidden md:block">Bienvenida,</p>
    <a
      href="#"
      className="space-x-2 items-center flex-col md:flex md:flex-row md:gap-3"
    >
      <Image
        className="rounded-full w-8 h-8 mx-auto mb-2 md:m-0"
        src="https://avatars.githubusercontent.com/u/53585453?v=4"
        alt="User Avatar"
        width={50}
        height={50}
      />
      <p className="text-sm text-center md:text-left font-bold">
        Agustina Martínez
      </p>
    </a>
  </div>
);

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-950 min-h-screen z-10 text-pink-500 w-20 md:w-[300px] lg:w-[400px] left-0"
    >
      <div
        id="logo"
        className="my-4 px-4 md:px-6 lg:px-6 flex flex-col text-center items-center justify-center lg:items-start md:items-start"
      >
        <h1 className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white">
          <span className="md:hidden hidden lg:block">Dashboard</span>
          <span className="text-pink-500">
            <IoLogoReact className="w-10 h-10 flex items-center justify-center" />
          </span>
        </h1>
        <p className="text-slate-400 text-sm">Curso de Next.js 13+</p>
      </div>
      <div className="hidden md:block">
        <Profile />
      </div>
      <div id="nav" className="w-full px-4 my-[40px] md:px-6 md:m-0">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
      <div className="md:hidden">
        <Profile />
      </div>
    </div>
  );
};
