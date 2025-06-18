'use client';

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import PokemonCard from './PokemonCard';
import { getPokemonBatchDetails } from '@/lib/pokemon';

type Pokemon = {
  name: string;
  image: string;
  height: number;
  weight: number;
};

export default function PokemonSlider() {
  const [list, setList] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemonBatchDetails().then(setList);
  }, []);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Best of All Time Pokemon
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {list.length === 0 ? (
          <p className="text-center text-gray-500">Loading Pokemon...</p>
        ) : (
          <Carousel className="w-full">
            <CarouselContent>
              {list.slice(0, 12).map((poke) => (
                <CarouselItem
                  key={poke.name}
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="p-2 h-full">
                    <PokemonCard {...poke} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2" aria-label="Previous Pokemon" />
            <CarouselNext className="right-2" aria-label="Next Pokemon" />
          </Carousel>
        )}
      </div>
    </section>
  );
}
