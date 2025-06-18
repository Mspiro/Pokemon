import { Metadata } from "next";
import { getPokemonDetails } from "../../lib/pokemon";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import PokemonImage from "./PokemonImage";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  return {
    title: `Pokemon | ${params.slug}`,
  };
}
export default async function PokemonPage({ params }: PageProps) {
  const pokemon = await getPokemonDetails(params.slug);
  const imageToShow = pokemon.sprites.other["official-artwork"].front_default;


  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 uppercase">
        {pokemon.name}
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16">
        {/* Pokemon Image */}
        <PokemonImage name={pokemon.name} image={imageToShow} />

        {/* Stats Summary */}
        <div className="flex-1 w-full space-y-6">
          {/* Base Stats */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Base Stats</h2>
            <ul className="space-y-4">
              {pokemon.stats.map((stat: any) => {
                const value = Math.min(stat.base_stat, 100);
                let colorClass = "bg-green-500";
                if (value > 60) colorClass = "bg-red-500";
                else if (value >= 40) colorClass = "bg-orange-400";

                return (
                  <li key={stat.stat.name}>
                    <div className="flex justify-between text-sm font-medium capitalize mb-1">
                      <span>{stat.stat.name}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="relative w-full">
                      <Progress value={value - 1} className="h-5 bg-gray-200" />
                      <div
                        className={`absolute top-0 left-0 h-5 rounded-l-4xl rounded-r-4xl ${colorClass}`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Abilities */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Abilities</h2>
            <div className="flex flex-wrap gap-2 capitalize">
              {pokemon.abilities.map((a: any) => (
                <Badge key={a.ability.name}>{a.ability.name}</Badge>
              ))}
            </div>
          </div>

          {/* Types */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Types</h2>
            <div className="flex flex-wrap gap-2">
              {pokemon.types.map((t: any) => (
                <Badge key={t.type.name} className="capitalize bg-gradient-to-tr from-indigo-400 to-purple-500 text-white">
                  {t.type.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 space-y-8">
        {/* Game Appearances */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Game Appearances</h2>
          <ul className="flex flex-wrap gap-2 text-sm capitalize">
            {pokemon.game_indices.map((g: any, i: number) => (
              <li key={`${g.version.name}-${i}`} className="bg-gray-100 px-2 py-1 rounded">
                {g.version.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Moves */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Moves</h2>
          <p className="text-sm text-gray-600 capitalize leading-relaxed">
            {pokemon.moves.map((m: any) => m.move.name).join(", ")}
          </p>
        </div>

        {/* Physical Characteristics */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Physical Characteristics</h2>
          <ul className="text-sm sm:text-base">
            <li><strong>Height:</strong> {pokemon.height / 10} m</li>
            <li><strong>Weight:</strong> {pokemon.weight / 10} kg</li>
          </ul>
        </div>

        {/* Power Profile */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Power Profile</h2>
          <ul className="text-sm sm:text-base capitalize">
            <li><strong>Strongest Stat:</strong> {
              pokemon.stats.reduce((max: any, curr: any) => curr.base_stat > max.base_stat ? curr : max).stat.name
            }</li>
            <li><strong>Weakest Stat:</strong> {
              pokemon.stats.reduce((min: any, curr: any) => curr.base_stat < min.base_stat ? curr : min).stat.name
            }</li>
            <li><strong>Deadliness:</strong> {
              pokemon.stats.reduce((acc: number, curr: any) => acc + curr.base_stat, 0) > 450 ? 'High' : 'Moderate'
            }</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
