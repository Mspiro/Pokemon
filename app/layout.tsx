import Header from "@/components/Header";
import Sidebar from "../components/Sidebar";
import { getAllPokemon } from "../lib/pokemon";
import "./globals.css";

export const metadata = {
  title: "Pokemon",
  description: "Pokemon Browser App",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pokemonList = await getAllPokemon();

  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <Header />
        <div className="flex flex-1 h-[calc(100vh-64px)] overflow-hidden">
          <aside className="hidden lg:block lg:w-auto sticky top-0 h-full overflow-y-auto bg-gray-100 border-r">
            <Sidebar pokemonList={pokemonList} />
          </aside>
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
