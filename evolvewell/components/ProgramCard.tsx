'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface Program {
  id: string;
  title: string;
  category: string;
  price: number;
  imageUrl: string;
  duration: string;
  level: string;
  isLimited?: boolean;
}

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-40 w-full bg-gray-200">
        <Image
          src={program.imageUrl}
          alt={program.title}
          fill
          className="object-cover"
        />
        {program.isLimited && (
          <div className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            Limited Time
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{program.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">{program.title}</h3>

        {/* Metadata */}
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
          <span>{program.duration}</span>
          <span>•</span>
          <span className="capitalize">{program.level}</span>
        </div>

        {/* Price & CTA */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">${program.price}</div>
          <Link
            href={`/programs/${program.id}`}
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
