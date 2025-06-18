import Link from "next/link";

// app/learn-more/page.tsx
export default function LearnMorePage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">Learn More About Pokemon</h1>

      <div className="space-y-6">
        <Section title="What Are Pokemon?">
          <p>
            Pokemon are creatures with unique abilities and powers. They live in various environments and form bonds
            with humans, often battling alongside trainers.
          </p>
        </Section>

        <Section title="Origin Story">
          <p>
            Pokemon originated from a concept created by Satoshi Tajiri in the 1990s, inspired by his childhood interest
            in collecting insects. It grew into a global franchise spanning games, TV shows, movies, and more.
          </p>
        </Section>

        <Section title="How Pokemon Use Their Powers">
          <p>
            Each Pokemon has unique moves and abilities depending on its type—fire, water, electric, psychic, and more.
            These powers are used in battles and can evolve with experience.
          </p>
        </Section>

        <Section title="Evolution Explained">
          <p>
            Pokemon evolve into more powerful forms through leveling up, special items, or friendships. This process
            changes their appearance, boosts their stats, and sometimes changes their type or abilities.
          </p>
        </Section>

        <Section title="Pokemon Trivia">
          <ul className="list-disc list-inside">
            <li>Pikachu was not the original mascot – Clefairy was considered.</li>
            <li>There are over 1,000 Pokemon species.</li>
            <li>The first Pokemon ever designed was Rhydon.</li>
          </ul>
        </Section>

        <div className="text-center">
          <Link href="/pokemon-list" className="text-blue-500 underline">
            Browse Pokemon
          </Link>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 text-purple-600">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
