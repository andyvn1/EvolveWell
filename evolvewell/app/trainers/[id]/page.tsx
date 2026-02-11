'use client';

import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import QRCodeCard from '@/components/QRCodeCard';
import { trainers } from '@/lib/mockData';
import { notFound } from 'next/navigation';

export default function TrainerProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const trainer = trainers.find((t) => t.id === id);

  if (!trainer) {
    notFound();
  }

  const profileUrl = `${typeof window !== 'undefined' ? window.location.origin : 'https://evolvewell.com'}/trainers/${trainer.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(profileUrl);
    alert('Profile link copied to clipboard!');
  };

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero with Image */}
        <div className="relative h-64 w-full bg-gradient-to-r from-blue-600 to-purple-600 sm:h-80">
          <Image
            src={trainer.imageUrl}
            alt={trainer.name}
            fill
            className="absolute inset-0 object-cover opacity-40"
          />
        </div>

        {/* Profile Card */}
        <section className="bg-white px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            {/* Header with Image */}
            <div className="mb-8 flex flex-col items-start gap-6 sm:flex-row">
              <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900">{trainer.name}</h1>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < Math.floor(trainer.ratingStars) ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {trainer.ratingStars.toFixed(1)} ({trainer.reviewCount} reviews)
                  </span>
                </div>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {trainer.specialties.map((spec, i) => (
                    <span key={i} className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Rate */}
                <div className="mt-4 text-2xl font-bold text-gray-900">
                  ${trainer.hourlyRate}
                  <span className="text-sm font-normal text-gray-600">/hour</span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/book/${trainer.id}`}
                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors text-center"
                  >
                    Reserve a Session
                  </Link>
                  <button
                    onClick={handleCopyLink}
                    className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    📋 Copy Link
                  </button>
                  <Link
                    href={`/messages`}
                    className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-center"
                  >
                    💬 Message
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mt-12 grid gap-12 lg:grid-cols-3">
              {/* Bio and Details */}
              <div className="lg:col-span-2">
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900">About</h2>
                  <p className="mt-4 text-gray-700">{trainer.bio}</p>
                </section>

                {/* Availability */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900">Available Slots</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {trainer.availability.map((slot, i) => (
                      <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                        <p className="text-sm font-semibold text-gray-600">
                          {new Date(slot.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                        <p className="mt-1 text-lg font-bold text-gray-900">{slot.time}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/book/${trainer.id}`}
                    className="mt-4 block rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Book a Session
                  </Link>
                </section>

                {/* Reviews */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                  <div className="mt-6 grid gap-4">
                    {trainer.reviews.map((review, i) => (
                      <ReviewCard
                        key={i}
                        review={{
                          author: review.author,
                          text: review.text,
                          rating: review.rating,
                        }}
                      />
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar - QR Code */}
              <div>
                <QRCodeCard url={profileUrl} title={`${trainer.name}'s Profile`} />

                {/* Stats Card */}
                <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900">Quick Stats</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Experience</p>
                      <p className="font-bold text-gray-900">8+ years</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Response Time</p>
                      <p className="font-bold text-gray-900">Within 2 hours</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Active Clients</p>
                      <p className="font-bold text-gray-900">24</p>
                    </div>
                  </div>
                </div>

                {/* Free Trial */}
                <div className="mt-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-6">
                  <p className="font-semibold text-gray-900">New to {trainer.name}?</p>
                  <p className="mt-2 text-sm text-gray-600">
                    Book your first session and get personalized coaching.
                  </p>
                  <Link
                    href={`/book/${trainer.id}`}
                    className="mt-4 block rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
