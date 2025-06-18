export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">About This Pokemon</h1>

      <div className="space-y-8">
        <Section title="What is This?">
          <p>
            This website is a modern, fast, and responsive Pokemon built using the latest web technologies. It allows you
            to explore the entire Pokemon universe in a clean and searchable interface. Whether you&rsquo;re a seasoned trainer
            or just a curious explorer, you&rsquo;ll find everything from Pokemon stats to origin stories right here.
          </p>
        </Section>

        <Section title="Key Features">
          <ul className="list-disc list-inside space-y-1">
            <li>🧠 Smart search & filter to find any Pokemon quickly</li>
            <li>📷 High-resolution images from the official Pokemon artwork</li>
            <li>🔊 Audio feature to hear each Pokemon&rsquo;s unique cry</li>
            <li>📈 Detailed views including height, weight, stats, and evolution</li>
            <li>📚 Learn more section to understand the lore of Pokemon</li>
            <li>📱 100% responsive for desktop, tablet, and mobile</li>
          </ul>
        </Section>

        <Section title="Why We Built It">
          <p>
            This Pokemon was created out of love for both frontend development and the Pokemon franchise. It&rsquo;s more than
            a project—it&rsquo;s a fun way to explore working with APIs, server-side rendering, and performance-focused design
            using <strong>Next.js</strong>. Our goal was to blend beauty, performance, and usability into one app.
          </p>
        </Section>

        <Section title="Tech Stack">
          <ul className="list-disc list-inside">
            <li><strong>Next.js</strong> App Router (with dynamic routes, SSR, and layout system)</li>
            <li><strong>Tailwind CSS</strong> for styling and responsiveness</li>
            <li><strong>PokeAPI</strong> for real-time Pokemon data</li>
            <li><strong>Lucide Icons</strong> and <strong>React Icons</strong> for UI polish</li>
            <li><strong>TypeScript</strong> for better DX & maintainability</li>
          </ul>
        </Section>

        <Section title="Author & Contributions">
          <p>
            This site is built by a passionate web developer who loves working with modern frameworks and wants to
            combine technical skills with fun, nostalgic content like Pokemon. Every page was thoughtfully designed to be
            responsive and engaging for users of all ages.
          </p>
        </Section>
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
