"use client";

import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-2">
      <SimpleWidget
        title={count.toString()}
        subtitle="Items"
        label="Carrito de compras"
        icon={<IoCartOutline size={50} />}
        href="/dashboard/counter"
      />
    </div>
  );
};
