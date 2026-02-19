'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, DollarSign, Users, TrendingUp, Award, Crown, Lock } from 'lucide-react';
import { trainers } from '@/lib/data/trainers';
import { getCurrentUserId, getUserBookings } from '@/lib/utils/storage';
import { formatDateTime, formatCurrency } from '@/lib/utils/format';

export default function TrainerDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const userId = getCurrentUserId();
  
  // For demo, map current user to a trainer (use first trainer)
  const trainer = trainers[0];
  const membership = trainer?.membership || 'basic';

  useEffect(() => {
    // In a real app, filter by trainer ID
    setBookings(getUserBookings(userId).filter((b) => b.trainerId === trainer?.id));
  }, [userId, trainer?.id]);

  const upcomingBookings = bookings.filter(
    (b) => b.status === 'confirmed' && new Date(b.slot) > new Date()
  );

  const totalEarnings = bookings.filter((b) => b.status === 'completed').length * (trainer?.hourlyRate || 0);

  const membershipFeatures = {
    basic: {
      name: 'Basic',
      color: 'gray',
      badgeClasses: 'bg-gray-100 text-gray-700',
      icon: Award,
      features: ['Basic profile listing', 'Up to 10 bookings/month', 'Standard support'],
      tools: ['Schedule Management', 'Basic Analytics'],
    },
    premium: {
      name: 'Premium',
      color: 'blue',
      badgeClasses: 'bg-blue-100 text-blue-700',
      icon: Award,
      features: ['Priority listing', 'Unlimited bookings', 'Create programs', 'Priority support'],
      tools: ['Schedule Management', 'Advanced Analytics', 'Client Progress Tracking', 'Custom Programs'],
    },
    elite: {
      name: 'Elite',
      color: 'purple',
      badgeClasses: 'bg-purple-100 text-purple-700',
      icon: Crown,
      features: ['Featured placement', 'Unlimited bookings', 'Create programs', 'Video sessions', '24/7 support'],
      tools: ['Schedule Management', 'Advanced Analytics', 'Client Progress Tracking', 'Custom Programs', 'Video Consultation Tools', 'Revenue Forecasting'],
    },
  };

  const currentMembership = membershipFeatures[membership];
  const MembershipIcon = currentMembership.icon;

  const isToolUnlocked = (tool: string) => {
    return currentMembership.tools.includes(tool);
  };

  const allTools = [
    { name: 'Schedule Management', requiredLevel: 'basic' },
    { name: 'Basic Analytics', requiredLevel: 'basic' },
    { name: 'Advanced Analytics', requiredLevel: 'premium' },
    { name: 'Client Progress Tracking', requiredLevel: 'premium' },
    { name: 'Custom Programs', requiredLevel: 'premium' },
    { name: 'Video Consultation Tools', requiredLevel: 'elite' },
    { name: 'Revenue Forecasting', requiredLevel: 'elite' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Trainer Dashboard</h1>
        <div className={`px-4 py-2 ${currentMembership.badgeClasses} rounded-lg font-semibold flex items-center`}>
          <MembershipIcon size={20} className="mr-2" />
          {currentMembership.name} Member
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm font-medium">Upcoming Sessions</h3>
            <Calendar className="text-blue-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{upcomingBookings.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm font-medium">Total Earnings</h3>
            <DollarSign className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{formatCurrency(totalEarnings)}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm font-medium">Total Clients</h3>
            <Users className="text-purple-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{bookings.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600 text-sm font-medium">Rating</h3>
            <TrendingUp className="text-pink-600" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{trainer?.rating || '5.0'}</p>
        </div>
      </div>

      {/* Membership Tools */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Membership Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allTools.map((tool) => {
            const unlocked = isToolUnlocked(tool.name);
            return (
              <div
                key={tool.name}
                className={`p-4 border-2 rounded-lg ${
                  unlocked
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{tool.name}</h3>
                  {unlocked ? (
                    <Award className="text-green-600" size={20} />
                  ) : (
                    <Lock className="text-gray-400" size={20} />
                  )}
                </div>
                {!unlocked && (
                  <p className="text-sm text-gray-600">
                    Requires {tool.requiredLevel.charAt(0).toUpperCase() + tool.requiredLevel.slice(1)} membership
                  </p>
                )}
              </div>
            );
          })}
        </div>
        {membership !== 'elite' && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-lg mb-2">Unlock More Features</h3>
            <p className="text-gray-700 mb-4">
              Upgrade your membership to access advanced tools and grow your training business.
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors">
              Upgrade Membership
            </button>
          </div>
        )}
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Sessions</h2>
        {upcomingBookings.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
            <p>No upcoming sessions</p>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <p className="font-semibold">Session with Client</p>
                  <p className="text-sm text-gray-600">{formatDateTime(booking.slot)}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">{formatCurrency(trainer?.hourlyRate || 0)}</p>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Confirmed
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
