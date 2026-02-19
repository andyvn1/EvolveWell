'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { trainers } from '@/lib/data/trainers';
import { programs } from '@/lib/data/programs';
import { getCurrentUserId, getUserBookings, getUserProgramPurchases } from '@/lib/utils/storage';
import { formatDateTime, formatCurrency } from '@/lib/utils/format';
import StarRating from '@/components/StarRating';

export default function AthleteDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [purchases, setPurchases] = useState<any[]>([]);
  const userId = getCurrentUserId();

  useEffect(() => {
    setBookings(getUserBookings(userId));
    setPurchases(getUserProgramPurchases(userId));
  }, [userId]);

  const upcomingBookings = bookings.filter(
    (b) => b.status === 'confirmed' && new Date(b.slot) > new Date()
  );

  const completedBookings = bookings.filter((b) => b.status === 'completed').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Athlete Dashboard</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm font-medium">Total Sessions</h3>
            <Calendar className="text-blue-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{bookings.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm font-medium">Completed</h3>
            <Clock className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{completedBookings}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm font-medium">Programs</h3>
            <BookOpen className="text-purple-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{purchases.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm font-medium">Progress</h3>
            <TrendingUp className="text-pink-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {purchases.length > 0
              ? Math.round(purchases.reduce((acc, p) => acc + p.progress, 0) / purchases.length)
              : 0}%
          </p>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Sessions</h2>
          <Link href="/trainers" className="text-blue-600 hover:text-blue-700 font-medium">
            Book New Session
          </Link>
        </div>
        {upcomingBookings.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
            <p>No upcoming sessions</p>
            <Link
              href="/trainers"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse Trainers
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingBookings.map((booking) => {
              const trainer = trainers.find((t) => t.id === booking.trainerId);
              if (!trainer) return null;
              return (
                <div key={booking.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src={trainer.imageUrl} alt={trainer.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{trainer.name}</h3>
                    <p className="text-gray-600">{trainer.specialty}</p>
                    <p className="text-sm text-gray-500">{formatDateTime(booking.slot)}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Confirmed
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* My Programs */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">My Programs</h2>
          <Link href="/programs" className="text-blue-600 hover:text-blue-700 font-medium">
            Browse Programs
          </Link>
        </div>
        {purchases.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <BookOpen size={48} className="mx-auto mb-4 text-gray-300" />
            <p>No programs purchased yet</p>
            <Link
              href="/programs"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Programs
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchases.map((purchase) => {
              const program = programs.find((p) => p.id === purchase.programId);
              if (!program) return null;
              return (
                <Link
                  key={purchase.id}
                  href={`/programs/${program.id}`}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-40">
                    <Image src={program.imageUrl} alt={program.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{program.duration}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="font-semibold text-blue-600">{purchase.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${purchase.progress}%` }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
