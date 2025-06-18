'use client';

import { useState, useEffect } from 'react';
import PokemonCard from '@/components/PokemonCard';
import { useInView } from 'react-intersection-observer';
import { Ring } from '@uiball/loaders';
import { getAllPokemonWithPagination } from '@/lib/pokemon';

type Pokemon = {
  name: string;
  image: string;
  height: number;
  weight: number;
};

export default function PokemonListPage() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView();

  const fetchMorePokemon = async () => {
    setIsLoading(true);
    const newPokemon = await getAllPokemonWithPagination(offset, 20);

    // 🔥 De-duplicate based on name
    setPokemonList(prev => {
      const existingNames = new Set(prev.map(p => p.name));
      const filtered = newPokemon.filter(p => !existingNames.has(p.name));
      return [...prev, ...filtered];
    });

    setOffset(prev => prev + 20);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMorePokemon(); // Initial load
  }, []);

  useEffect(() => {
    if (inView && !isLoading) {
      fetchMorePokemon(); // Load more when sentinel comes into view
    }
  }, [inView]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">All Pokemon</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6">
        {pokemonList.map(poke => (
          <PokemonCard key={poke.name} {...poke} />
        ))}
      </div>

      {isLoading && (
        <div className="flex justify-center items-center mt-10">
          <Ring size={40} lineWeight={5} speed={2} color="blue" />
        </div>
      )}

      <div ref={ref} className="h-12 mt-10" /> {/* Intersection observer target */}
    </section>
  );
}
