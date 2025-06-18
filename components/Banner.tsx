'use client'

import Link from 'next/link'
import { Button } from './ui/button'

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 sm:py-20 px-4 mb-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to the Ultimate Pokemon
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Discover your favorite Pokemon, learn about their abilities and stats, and enjoy a sleek UI built with Next.js + shadcn/ui!
        </p>
        <Button asChild>
          <Link href="/pokemon-list">Explore Pokemon</Link>
        </Button>
      </div>
    </section>
  )
}
