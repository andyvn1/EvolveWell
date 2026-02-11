'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { programs } from '@/lib/mockData';
import { notFound } from 'next/navigation';

interface Purchase {
  programId: string;
  timestamp: number;
}

export default function ProgramDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const program = programs.find((p) => p.id === id);
  const [purchased, setPurchased] = useState(false);
  const [step, setStep] = useState<'detail' | 'checkout' | 'confirmation'>('detail');

  useEffect(() => {
    // Check if user already purchased
    const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
    const alreadyPurchased = purchases.some((p: Purchase) => p.programId === id);
    setPurchased(alreadyPurchased);
  }, [id]);

  if (!program) {
    notFound();
  }

  const handlePurchase = () => {
    setStep('checkout');
  };

  const handlePayment = () => {
    const purchase: Purchase = {
      programId: id,
      timestamp: Date.now(),
    };

    const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
    purchases.push(purchase);
    localStorage.setItem('purchases', JSON.stringify(purchases));

    setPurchased(true);
    setStep('confirmation');
  };

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero */}
        {step === 'detail' && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-12 text-white sm:py-16">
            <div className="mx-auto max-w-7xl">
              <Link href="/programs" className="inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100">
                ← Back to Programs
              </Link>
              <h1 className="mt-4 text-4xl font-bold">{program.name}</h1>
              <p className="mt-2">{program.category}</p>
            </div>
          </div>
        )}

        {/* Content */}
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            {step === 'detail' && (
              <>
                {/* Program Info */}
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <p className="text-lg text-gray-700">{program.description}</p>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <p className="text-sm font-medium text-gray-600">Duration</p>
                        <p className="mt-1 text-xl font-bold text-gray-900">{program.duration}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <p className="text-sm font-medium text-gray-600">Lessons</p>
                        <p className="mt-1 text-xl font-bold text-gray-900">{program.lessons.length}</p>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <p className="text-sm font-medium text-gray-600">Level</p>
                        <p className="mt-1 text-xl font-bold text-gray-900">All</p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2 className="text-2xl font-bold text-gray-900">What You'll Learn</h2>
                      <ul className="mt-6 space-y-4">
                        {program.lessons.map((lesson, i) => (
                          <li key={i} className="border-l-4 border-blue-600 pl-4">
                            <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                            <p className="mt-1 text-gray-600">{lesson.content}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div>
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sticky top-4">
                      <p className="text-3xl font-bold text-gray-900">${program.price}</p>
                      <p className="mt-1 text-sm text-gray-600">One-time purchase</p>

                      {purchased ? (
                        <div className="mt-6">
                          <div className="rounded-lg bg-green-100 p-4 text-center">
                            <p className="text-green-700 font-semibold">✅ You own this program</p>
                          </div>
                          <Link
                            href={`/programs/${id}/access`}
                            className="mt-4 block w-full rounded-lg bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700 transition-colors"
                          >
                            Access Program
                          </Link>
                        </div>
                      ) : (
                        <button
                          onClick={handlePurchase}
                          className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
                        >
                          Purchase Now
                        </button>
                      )}

                      <div className="mt-6 space-y-3 border-t border-gray-200 pt-6 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <span>✓</span> Lifetime access
                        </p>
                        <p className="flex items-center gap-2">
                          <span>✓</span> Download lessons
                        </p>
                        <p className="flex items-center gap-2">
                          <span>✓</span> Money-back guarantee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Checkout Step */}
            {step === 'checkout' && (
              <div className="max-w-md mx-auto">
                <div className="rounded-lg bg-white border border-gray-200 p-8 shadow-sm">
                  <h1 className="text-2xl font-bold text-gray-900">Complete Purchase</h1>

                  <div className="mt-6 rounded-lg bg-gray-50 p-4">
                    <h3 className="font-semibold text-gray-900">{program.name}</h3>
                    <div className="mt-3 flex justify-between text-gray-900">
                      <span>Price</span>
                      <span className="font-bold">${program.price}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setStep('detail')}
                      className="flex-1 rounded-lg border border-gray-300 py-2 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePayment}
                      className="flex-1 rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
                    >
                      Pay ${program.price}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Confirmation Step */}
            {step === 'confirmation' && (
              <div className="max-w-md mx-auto text-center">
                <div className="text-6xl">✅</div>
                <h1 className="mt-4 text-2xl font-bold text-gray-900">Purchase Complete!</h1>
                <p className="mt-2 text-gray-600">You now have access to {program.name}.</p>

                <Link
                  href={`/programs/${id}/access`}
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Start Learning
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
