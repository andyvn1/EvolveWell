'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgramCard, { type Program } from '@/components/ProgramCard';
import { programs } from '@/lib/mockData';

export default function ProgramsPage() {
  const programsData: Program[] = programs.map((prog) => ({
    id: prog.id,
    title: prog.name,
    category: prog.category,
    price: prog.price,
    imageUrl: prog.imageUrl,
    duration: prog.duration,
    level: 'All Levels',
    isLimited: prog.id === '3' || prog.id === '5',
  }));

  const categories = Array.from(new Set(programsData.map((p) => p.category))).sort();

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-12 text-white sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold sm:text-4xl">Self-Guided Programs</h1>
            <p className="mt-2 opacity-90">Expert-designed programs without personal coaching required.</p>
          </div>
        </section>

        {/* Programs by Category */}
        {categories.map((category) => {
          const categoryPrograms = programsData.filter((p) => p.category === category);
          return (
            <section key={category} className="border-b border-gray-200 bg-white px-4 py-16 sm:py-20 last:border-0">
              <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryPrograms.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
