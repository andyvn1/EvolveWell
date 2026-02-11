'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrainerCard from '@/components/TrainerCard';
import { trainers } from '@/lib/mockData';

export default function TrainersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

  // Get unique specialties
  const allSpecialties = Array.from(
    new Set(trainers.flatMap((t) => t.specialties))
  ).sort();

  // Filter trainers
  const filteredTrainers = trainers.filter((trainer) => {
    const matchesSearch =
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesSpecialty =
      !selectedSpecialty || trainer.specialties.includes(selectedSpecialty);

    return matchesSearch && matchesSpecialty;
  });

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-12 text-white sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold sm:text-4xl">Find Your Coach</h1>
            <p className="mt-2 opacity-90">
              Browse our network of expert trainers. Free to discover.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-gray-200 bg-white px-4 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Search */}
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-black focus:border-blue-600 focus:outline-none"
              />

              {/* Specialty Filter */}
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-black focus:border-blue-600 focus:outline-none"
              >
                <option value="">All Specialties</option>
                {allSpecialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>

            {(searchTerm || selectedSpecialty) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpecialty('');
                }}
                className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Clear filters
              </button>
            )}
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="bg-gray-50 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            {filteredTrainers.length > 0 ? (
              <>
                <p className="mb-8 text-gray-600">
                  Found <span className="font-semibold">{filteredTrainers.length}</span> trainer{filteredTrainers.length !== 1 ? 's' : ''}
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {filteredTrainers.map((trainer) => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-lg bg-white p-12 text-center">
                <p className="text-lg text-gray-600">No trainers found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSpecialty('');
                  }}
                  className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
