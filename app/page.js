// app/page.tsx
import Banner from '@/components/Banner';
import Features from '@/components/Features';
import PokemonSlider from '@/components/PokemonSlider';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="mb-8">
          <Banner />
        </section>

        <section className="mb-12">
          <Features />
        </section>

        <section className="mb-12">
          <PokemonSlider />
        </section>
      </main>
      <Footer />
    </div>
  );
}
