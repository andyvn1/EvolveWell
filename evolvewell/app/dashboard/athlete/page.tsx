'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Link from 'next/link';

interface Booking {
  trainerId: string;
  selectedDate: string;
  selectedTime: string;
  timestamp: number;
}

export default function AthleteDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(savedBookings);
  }, []);

  if (!mounted) return null;

  // Mock progress data
  const progressData = [
    { week: 'Week 1', weight: 150, sessions: 3 },
    { week: 'Week 2', weight: 155, sessions: 4 },
    { week: 'Week 3', weight: 158, sessions: 3 },
    { week: 'Week 4', weight: 162, sessions: 5 },
    { week: 'Week 5', weight: 165, sessions: 4 },
    { week: 'Week 6', weight: 170, sessions: 5 },
  ];

  const workoutBreakdown = [
    { name: 'Strength', value: 40 },
    { name: 'Cardio', value: 35 },
    { name: 'Flexibility', value: 25 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899'];

  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white px-4 py-8 sm:py-12 border-b border-gray-200">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold text-gray-900">Athlete Dashboard</h1>
            <p className="mt-2 text-gray-600">Track your progress and manage your coaching journey.</p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl">
            {/* Quick Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">24</p>
                <p className="mt-1 text-xs text-green-600">+3 this week</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Weight Lifted</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">2,480 lbs</p>
                <p className="mt-1 text-xs text-green-600">+240 this week</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Consistency</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">92%</p>
                <p className="mt-1 text-xs text-green-600">Great adherence</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <p className="text-sm font-medium text-gray-600">Active Coaches</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{bookings.length > 0 ? '1' : '0'}</p>
                <p className="mt-1 text-xs text-gray-600">Upcoming sessions</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid gap-8 lg:grid-cols-2 mb-8">
              {/* Weight Progress */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <h2 className="font-bold text-gray-900">Weight Progress</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis domain={[140, 175]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="weight"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Workout Breakdown */}
              <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
                <h2 className="font-bold text-gray-900">Workout Breakdown</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={workoutBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {workoutBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sessions Chart */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200 mb-8">
              <h2 className="font-bold text-gray-900">Sessions Per Week</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sessions" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Upcoming Bookings */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-200">
              <h2 className="font-bold text-gray-900 mb-4">Upcoming Sessions</h2>
              {bookings.length > 0 ? (
                <div className="space-y-3">
                  {bookings.slice(0, 3).map((booking, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-blue-50 p-4">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {new Date(booking.selectedDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'short',
                            day: 'numeric',
                          })}{' '}
                          at {booking.selectedTime}
                        </p>
                        <p className="text-sm text-gray-600">Booking ID: #{String(booking.timestamp).slice(-6)}</p>
                      </div>
                      <Link
                        href="/messages"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                      >
                        Message Trainer
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">No upcoming sessions scheduled.</p>
                  <Link
                    href="/trainers"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Book a Session
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
