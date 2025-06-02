import { CartCounter } from "@/components/dashboard";
import { Metadata } from "next";

const CounterPage = () => {
  return (
    <div className="flex flex-col p-4 w-full h-full">
      <h1 className="text-5xl">Contador</h1>
      <div className="flex flex-col items-center justify-center">
        <span>Productos en el carrito</span>
        <CartCounter />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Shopping cart",
  description: "Contador client side",
};

export default CounterPage;
