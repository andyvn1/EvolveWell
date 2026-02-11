'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { classes } from '@/lib/data/classes';
import { trainers } from '@/lib/data/trainers';
import { formatCurrency, formatDateTime } from '@/lib/utils/format';
import { addClassEnrollment, getCurrentUserId, isUserEnrolledInClass } from '@/lib/utils/storage';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

export default function ClassesPage() {
  const [enrolledClasses, setEnrolledClasses] = useState<string[]>([]);
  const userId = getCurrentUserId();

  useEffect(() => {
    const enrolled = classes.filter((c) => isUserEnrolledInClass(userId, c.id)).map((c) => c.id);
    setEnrolledClasses(enrolled);
  }, [userId]);

  const handleEnroll = (classId: string) => {
    addClassEnrollment({
      classId,
      userId,
    });
    setEnrolledClasses([...enrolledClasses, classId]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Group Classes</h1>
        <p className="text-xl text-gray-600">
          Join group fitness classes led by certified trainers
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => {
          const trainer = trainers.find((t) => t.id === classItem.trainerId);
          const isEnrolled = enrolledClasses.includes(classItem.id);
          const spotsLeft = classItem.capacity - classItem.enrolled;
          const isFull = spotsLeft <= 0;

          return (
            <div
              key={classItem.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={classItem.imageUrl}
                  alt={classItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-blue-600">
                  {formatCurrency(classItem.price)}
                </div>
                {isEnrolled && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Enrolled
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                    {classItem.category}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    {classItem.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{classItem.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{classItem.description}</p>

                {trainer && (
                  <div className="flex items-center mb-4 pb-4 border-b">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image src={trainer.imageUrl} alt={trainer.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{trainer.name}</p>
                      <p className="text-xs text-gray-600">{trainer.specialty}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {formatDateTime(classItem.date)}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock size={16} className="mr-2" />
                    {classItem.duration} minutes
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users size={16} className="mr-2" />
                    {classItem.enrolled}/{classItem.capacity} enrolled
                    {spotsLeft > 0 && spotsLeft <= 3 && (
                      <span className="ml-2 text-orange-600 font-medium">
                        ({spotsLeft} spots left)
                      </span>
                    )}
                  </div>
                </div>

                {isEnrolled ? (
                  <button
                    disabled
                    className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold cursor-default"
                  >
                    You're Enrolled
                  </button>
                ) : isFull ? (
                  <button
                    disabled
                    className="w-full px-4 py-2 bg-gray-200 text-gray-500 rounded-lg font-semibold cursor-not-allowed"
                  >
                    Class Full
                  </button>
                ) : (
                  <button
                    onClick={() => handleEnroll(classItem.id)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    Enroll Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
