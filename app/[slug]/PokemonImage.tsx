"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

type Props = {
  name: string;
  image: string;
};

export default function PokemonImage({ name, image }: Props) {
  return (
    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative group mx-auto">
      <Image
        src={image}
        alt={name}
        fill
        className="object-contain rounded-xl"
        sizes="(max-width: 768px) 100vw, 384px"
        priority
      />

      <div className="absolute bottom-2 right-2 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
        <audio
          id="cry-audio"
          src={`https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.ogg`}
        />
        <Button
          variant="secondary"
          size="icon"
          className="w-10 h-10 sm:w-12 sm:h-12"
          onClick={() => {
            const audio = document.getElementById("cry-audio") as HTMLAudioElement;
            audio?.play();
          }}
        >
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>
    </div>
  );
}
