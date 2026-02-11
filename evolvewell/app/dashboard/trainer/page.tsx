'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TrainerDashboard() {
  const [hourlyRate, setHourlyRate] = useState(75);
  const [availability, setAvailability] = useState('Monday, Wednesday, Friday, Saturday - 8am to 6pm');

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white px-4 py-8 sm:py-12 border-b border-gray-200">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold text-gray-900">Trainer Dashboard</h1>
            <p className="mt-2 text-gray-600">Manage your coaching business, bookings, and programs.</p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            {/* Quick Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Active Clients</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
                <p className="mt-1 text-xs text-green-600">+3 this month</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">$4,850</p>
                <p className="mt-1 text-xs text-green-600">+$650 this week</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Rating</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">4.9★</p>
                <p className="mt-1 text-xs text-green-600">47 reviews</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Bookings This Week</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
                <p className="mt-1 text-xs text-gray-600">Fully booked</p>
              </div>
            </div>

            {/* Business Settings */}
            <div className="grid gap-8 lg:grid-cols-2 mb-8">
              {/* Pricing */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <h2 className="font-bold text-gray-900 mb-4">Pricing</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Hourly Rate</label>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">$</span>
                      <input
                        type="number"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(Number(e.target.value))}
                        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none"
                      />
                      <span className="text-gray-600">/hour</span>
                    </div>
                    <p className="mt-2 text-xs text-gray-600">You keep 80%, EvolveWell takes 20%</p>
                  </div>

                  <button className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <h2 className="font-bold text-gray-900 mb-4">Availability</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Your Hours</label>
                    <textarea
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                      rows={3}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <button className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition-colors">
                    Update Availability
                  </button>
                </div>
              </div>
            </div>

            {/* Action Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              <Link
                href="/programs"
                className="rounded-lg bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Create Program</h3>
                <p className="mt-2 text-sm text-gray-600">Build and sell self-guided programs to earn passive income.</p>
                <button className="mt-4 font-semibold text-blue-600 hover:text-blue-700">Start Creating →</button>
              </Link>

              <Link
                href="/messages"
                className="rounded-lg bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Message Clients</h3>
                <p className="mt-2 text-sm text-gray-600">Communicate with your athletes and provide coaching guidance.</p>
                <button className="mt-4 font-semibold text-blue-600 hover:text-blue-700">Open Messages →</button>
              </Link>

              <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-6 shadow-sm border border-purple-200">
                <h3 className="font-bold text-gray-900">Membership Upgrade</h3>
                <p className="mt-2 text-sm text-gray-600">Access advanced features like scheduling, templates, and analytics.</p>
                <button className="mt-4 font-semibold text-purple-600 hover:text-purple-700">Learn More →</button>
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="font-bold text-gray-900 mb-4">Upcoming Sessions</h2>
              <div className="space-y-3">
                {[
                  { client: 'Alex Johnson', date: 'Today, 10:00 AM', status: 'In 2 hours' },
                  { client: 'Maria Garcia', date: 'Today, 2:00 PM', status: 'In 6 hours' },
                  { client: 'James Chen', date: 'Tomorrow, 9:00 AM', status: 'Tomorrow' },
                  { client: 'Emma Wilson', date: 'Tomorrow, 5:00 PM', status: 'Tomorrow' },
                ].map((booking, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                    <div>
                      <p className="font-semibold text-gray-900">{booking.client}</p>
                      <p className="text-sm text-gray-600">{booking.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-gray-600">{booking.status}</span>
                      <button className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-700 transition-colors">
                        Confirm
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
