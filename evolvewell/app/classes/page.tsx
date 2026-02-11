'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClassCard, { type Class } from '@/components/ClassCard';
import { classSchedule } from '@/lib/mockData';

export default function ClassesPage() {
  const classes: Class[] = classSchedule.map((cls) => ({
    id: cls.id,
    name: cls.name,
    time: cls.time,
    duration: cls.duration,
    level: cls.level,
    description: `Instructor: ${cls.instructor}`,
    capacity: 20,
    enrolled: Math.floor(Math.random() * 18) + 2,
  }));

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-12 text-white sm:py-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold sm:text-4xl">Group Classes</h1>
            <p className="mt-2 opacity-90">Join our community for structured, expert-led sessions.</p>
          </div>
        </section>

        {/* Classes */}
        <section className="bg-gray-50 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {classes.map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
