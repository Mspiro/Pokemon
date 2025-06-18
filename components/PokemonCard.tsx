'use client';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
  name: string;
  image: string;
  height: number;
  weight: number;
};

export default function PokemonCard({ name, image, height, weight }: Props) {
  const imageToShow =
    image ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractIdFromUrl(image)}.png`;

  return (
    <Link href={`/${name}`} aria-label={`View details for ${name}`}>
      <div className="border rounded-xl p-4 bg-white hover:shadow-lg transition-transform hover:scale-105 min-h-full">
        <div className="flex justify-center">
          <Image
            src={imageToShow}
            alt={name || 'Pokemon'}
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
        <h2 className="text-xl font-bold text-center mt-3 capitalize">{name}</h2>
        <p className="text-sm text-gray-600 text-center">
          Height: {height} | Weight: {weight}
        </p>
      </div>
    </Link>
  );
}

// Extract ID from image URL to fallback to official-artwork
function extractIdFromUrl(imageUrl: string) {
  const match = imageUrl?.match(/\/(\d+)\.png$/);
  return match ? match[1] : '1'; // fallback to Bulbasaur
}
