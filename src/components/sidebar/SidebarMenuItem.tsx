"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeart,
} from "react-icons/io5";

interface SidebarMenuItemProps {
  path: string;
  icon: string;
  title: string;
  subtitle: string;
}

export const SidebarMenuItem = ({
  path,
  icon,
  title,
  subtitle,
}: SidebarMenuItemProps) => {
  const pathname = usePathname();

  const mapIcon: Record<string, JSX.Element> = {
    IoBrowsersOutline: <IoBrowsersOutline size={30} />,
    IoCalculator: <IoCalculator size={30} />,
    IoFootball: <IoFootball size={30} />,
    IoHeart: <IoHeart size={30} />,
  };

  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${
        pathname === path ? "bg-gray-600" : ""
      } hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div className="flex w-full m-0 justify-center md:w-auto md:justify-start md:mr-4">
        {mapIcon[icon]}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white hidden md:block">
          {title}
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
