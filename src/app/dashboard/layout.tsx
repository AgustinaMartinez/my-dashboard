import { Sidebar } from "../../components";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-800 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-pink-700 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="w-full text-slate-300">{children}</div>
      </div>
    </div>
  );
}
