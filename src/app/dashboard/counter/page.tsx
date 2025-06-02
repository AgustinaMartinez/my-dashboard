import { CartCounter } from "@/components/dashboard";
import { Metadata } from "next";

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Shopping cart",
  description: "Contador client side",
};

export default CounterPage;
