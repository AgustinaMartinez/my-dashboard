import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Pokemon no encontrado
      </div>
      <Link
        href="/dashboard/pokemons"
        className="relative inline-block mt-5 text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          Ver lista de Pokemons
        </span>
      </Link>
    </div>
  );
}
