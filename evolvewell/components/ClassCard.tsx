'use client';

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

export interface Class {
  id: string;
  name: string;
  time: string;
  duration: string;
  level: string;
  description: string;
  capacity: number;
  enrolled: number;
}

export default function ClassCard({ classItem }: { classItem: Class }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const spotsLeft = useMemo(() => classItem.capacity - classItem.enrolled, [classItem.capacity, classItem.enrolled]);
  const isFull = useMemo(() => spotsLeft <= 0, [spotsLeft]);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white">
        <h3 className="text-lg font-bold">{classItem.name}</h3>
        <p className="mt-1 text-sm font-medium opacity-90">{classItem.time}</p>
      </div>

      <div className="p-6">
        <p className="text-gray-700">{classItem.description}</p>

        {/* Meta */}
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Duration</p>
            <p className="font-semibold text-gray-900">{classItem.duration}</p>
          </div>
          <div>
            <p className="text-gray-600">Level</p>
            <p className="font-semibold text-gray-900 capitalize">{classItem.level}</p>
          </div>
        </div>

        {/* Capacity */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            {isFull ? (
              <span className="font-semibold text-red-600">Class Full</span>
            ) : (
              <span>
                {mounted && <span className="font-semibold text-gray-900">{spotsLeft}</span>} spots left
              </span>
            )}
          </p>
          <div className="mt-2 h-2 rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{ width: mounted ? `${(classItem.enrolled / classItem.capacity) * 100}%` : '0%' }}
            />
          </div>
        </div>

        {/* Reserve Button */}
        <Link
          href={`/classes`}
          className={`mt-4 block w-full rounded-lg py-2 text-center font-semibold transition-colors ${
            isFull
              ? 'cursor-not-allowed bg-gray-200 text-gray-600'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isFull ? 'Class Full' : 'Reserve Spot'}
        </Link>
      </div>
    </div>
  );
}
