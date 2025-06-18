'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

type Props = {
  pokemonList: { name: string; url: string }[];
};

export default function Sidebar({ pokemonList }: Props) {
  const [search, setSearch] = useState("");

  const filteredPokemon = pokemonList.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  // const getIdFromUrl = (url: string) => {
  //   const match = url.match(/\/pokemon\/(\d+)\//);
  //   return match ? match[1] : "0";
  // };    // It causing timeout error in terminal due to slow gitresponse

  return (
    <aside className="w-64 h-full bg-gradient-to-br from-indigo-50 to-purple-100 border-r shadow-md p-4 flex flex-col overflow-hidden">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center tracking-wide">
        Pokemon
      </h2>

      <Input
        type="text"
        placeholder="Search Pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 rounded-lg border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500  lg:min-h-9"
      />

      <ScrollArea className="flex-1 pr-1 overflow-y-auto">
        <ul className="space-y-1 p-1">

          {filteredPokemon.map((poke) => {
            // const id = getIdFromUrl(poke.url);
            return (
              <li key={poke.name}>
                <Link
                  href={`/${poke.name}`}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-indigo-100 text-black capitalize transition-colors"
                >
                  <div className="w-6 h-6 relative">
                    <Image
                      src='/pokemon-logo.png'
                      alt={poke.name}
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                  {poke.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </aside>
  );
}
