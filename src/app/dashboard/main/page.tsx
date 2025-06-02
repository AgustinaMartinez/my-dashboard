import { WidgetsGrid } from "@/components";

const MainPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl md:text-5xl">Página principal</h1>
      <WidgetsGrid />
    </div>
  );
};

export const metadata = {
  title: "Dashboard",
  description: "Esta es una APP para practicar Next, React y Redux",
};

export default MainPage;
