'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trainer } from '@/lib/mockData';

export default function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <Link href={`/trainers/${trainer.id}`} className="block">
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
        {/* Image */}
        <div className="relative h-48 w-full bg-gray-200">
          <Image
            src={trainer.imageUrl}
            alt={trainer.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">{trainer.name}</h3>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(trainer.ratingStars) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {trainer.ratingStars.toFixed(1)} ({trainer.reviewCount} reviews)
            </span>
          </div>

          {/* Specialties */}
          <div className="mt-3 flex flex-wrap gap-1">
            {trainer.specialties.slice(0, 2).map((spec, i) => (
              <span key={i} className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                {spec}
              </span>
            ))}
            {trainer.specialties.length > 2 && (
              <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                +{trainer.specialties.length - 2} more
              </span>
            )}
          </div>

          {/* Rate */}
          <div className="mt-4 text-xl font-bold text-gray-900">
            ${trainer.hourlyRate}
            <span className="text-sm font-normal text-gray-600">/hour</span>
          </div>

          {/* View Profile Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="mt-4 block w-full rounded-lg bg-blue-600 py-2 text-center font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            View Profile
          </button>
        </div>
      </div>
    </Link>
  );
}
