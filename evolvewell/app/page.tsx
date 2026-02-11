'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrainerCard from '@/components/TrainerCard';
import ClassCard, { type Class } from '@/components/ClassCard';
import ProgramCard, { type Program } from '@/components/ProgramCard';
import ProductCard, { type Product } from '@/components/ProductCard';
import ReviewCard from '@/components/ReviewCard';
import { trainers, classSchedule, programs, products, testimonials, founders, coreValues, principles } from '@/lib/mockData';
import Link from 'next/link';

export default function Home() {
  // Transform mockData to match component interfaces
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

  const programsData: Program[] = programs.map((prog) => ({
    id: prog.id,
    title: prog.name,
    category: prog.category,
    price: prog.price,
    imageUrl: prog.imageUrl,
    duration: prog.duration,
    level: 'All Levels',
    isLimited: prog.id === '3' || prog.id === '5', // Highlight some as limited
  }));

  const productsData: Product[] = products.map((prod) => ({
    id: prod.id,
    name: prod.name,
    price: prod.price,
    imageUrl: prod.imageUrl,
    category: prod.category,
  }));

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 px-4 py-20 text-white sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Stronger
              <br />
              Every Single Day
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium opacity-90">
              Your connection to expert coaching for a fitter, stronger you!
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#trainers"
                className="rounded-full bg-white px-8 py-3 font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
              >
                Learn More
              </a>
              <Link
                href="/trainers"
                className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Find a Trainer
              </Link>
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="bg-white px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center sm:p-12">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-700 italic">
                Stop guessing with one-size-fits-all AI workouts. Get expert trainers who listen, adjust your plan, and help you stay consistent with progress tracking.
              </p>
              <p className="mt-4 text-base text-gray-600">
                We believe real human coaching + accountability + structured communication + progress tracking = transformative results.
              </p>
            </div>
          </div>
        </section>

        {/* GROUP CLASSES SECTION */}
        <section className="bg-gray-50 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">Group Classes</h2>
            <p className="mt-2 text-gray-600">Join our community for structured, expert-led classes.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {classes.map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
          </div>
        </section>

        {/* MEET TRAINERS SECTION */}
        <section id="trainers" className="bg-white px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">Meet Our Trainers</h2>
              <Link href="/trainers" className="font-semibold text-blue-600 hover:text-blue-700">
                Meet more trainers →
              </Link>
            </div>
            <p className="mt-2 text-gray-600">Expert coaches ready to help you achieve your goals.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trainers.slice(0, 4).map((trainer) => (
                <TrainerCard key={trainer.id} trainer={trainer} />
              ))}
            </div>
          </div>
        </section>

        {/* ATHLETE HOME BASE SECTION */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Athlete Home Base</h2>
                <p className="mt-4 text-lg text-gray-700">
                  Your space for education, accountability, and real progress.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Easy trainer discovery with trust signals (ratings & reviews)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Simple booking and direct communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Progress tracking and accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Real human adaptation + feedback</span>
                  </li>
                </ul>
                <Link
                  href="/dashboard/athlete"
                  className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  View Athlete Dashboard
                </Link>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-200 to-purple-200 p-8 text-center text-white">
                <div>
                  <div className="text-6xl">📊</div>
                  <p className="mt-4 text-lg font-semibold">Track your progress in real-time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRAINER HOME BASE SECTION */}
        <section className="bg-white px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-200 to-pink-200 p-8 text-center text-white">
                <div>
                  <div className="text-6xl">💼</div>
                  <p className="mt-4 text-lg font-semibold">Run your coaching business</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Trainer Home Base</h2>
                <p className="mt-4 text-lg text-gray-700">
                  A complete toolkit to grow your coaching business.
                </p>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Set your own hourly rate (you control pricing)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Manage availability and bookings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Build reputation (star ratings & reviews)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Create and sell self-guided programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-blue-600">✓</span>
                    <span>Direct client communication and progress tracking</span>
                  </li>
                </ul>
                <Link
                  href="/dashboard/trainer"
                  className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Become a Trainer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SELF-GUIDED PROGRAMS SECTION */}
        <section className="bg-gray-50 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">Self-Guided Programs</h2>
            <p className="mt-2 text-gray-600">Expert-designed programs without personal coaching required.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programsData.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/programs"
                className="inline-block rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Browse All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* HOME GYM EQUIPMENT SECTION */}
        <section className="bg-white px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900">Home Gym Equipment</h2>
            <p className="mt-2 text-gray-600">Essential gear to build your home fitness space.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productsData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/shop"
                className="inline-block rounded-full bg-gray-900 px-8 py-3 font-semibold text-white hover:bg-black transition-colors"
              >
                Order Now!
              </Link>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">What Athletes Say</h2>
            <p className="mt-2 text-center text-gray-600">Real results from real people.</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((testimonial, i) => (
                <ReviewCard
                  key={i}
                  review={{
                    author: testimonial.name,
                    text: testimonial.text,
                    rating: 5,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section className="bg-gray-50 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              EvolveWell was founded to solve a real problem: athletes deserve real coaching, not generic AI plans. Our team built a platform that gives trainers the tools to run their business while giving athletes the accountability and expertise they need to succeed.
            </p>

            <h3 className="mt-10 text-xl font-bold text-gray-900">Founders</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {founders.map((founder, i) => (
                <div key={i} className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="font-semibold text-gray-900">{founder.name}</p>
                  <p className="mt-1 text-sm text-gray-600">{founder.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CULTURE & PRINCIPLES SECTION */}
        <section className="bg-white px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">Our Culture & Values</h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-8 text-center">
                <h3 className="text-lg font-bold text-gray-900">Core Values</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {coreValues.map((value, i) => (
                    <li key={i} className="font-semibold">
                      {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-purple-50 p-8">
                <h3 className="text-center text-lg font-bold text-gray-900">Principles</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-pink-50 to-orange-50 p-8 text-center sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-bold text-gray-900">Our Promise</h3>
                <p className="mt-4 text-gray-700">
                  We're building the infrastructure for a new generation of coaches to run thriving, independent businesses while delivering real results for athletes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-16 text-center text-white sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Ready to evolve?</h2>
            <p className="mt-4 text-lg opacity-90">Start your transformation today.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/trainers"
                className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
              >
                Find a Trainer
              </Link>
              <a
                href="#athlete-signup"
                className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Sign up here
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
