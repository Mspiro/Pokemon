export default function Features() {
  const features = [
    { title: "Search & Filter", desc: "Easily find your favorite Pokemon." },
    { title: "Detailed View", desc: "See abilities, stats, and images." },
    { title: "Fast & Responsive", desc: "Optimized for all devices." },
  ];

  return (
    <section className="mb-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Site Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="border p-5 sm:p-6 rounded-lg text-center hover:shadow-lg transition bg-white"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
