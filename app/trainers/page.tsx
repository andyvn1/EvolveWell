import Link from 'next/link';
import Image from 'next/image';
import { trainers } from '@/lib/data/trainers';
import StarRating from '@/components/StarRating';
import { formatCurrency } from '@/lib/utils/format';
import { Award } from 'lucide-react';

export default function TrainersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Trainer</h1>
        <p className="text-xl text-gray-600">
          Browse our certified trainers and find the perfect match for your fitness goals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer) => (
          <Link
            key={trainer.id}
            href={`/trainers/${trainer.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64">
              <Image
                src={trainer.imageUrl}
                alt={trainer.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                {formatCurrency(trainer.hourlyRate)}/hr
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{trainer.specialty}</p>
              <div className="flex items-center space-x-2 mb-3">
                <StarRating rating={trainer.rating} size={18} />
                <span className="text-sm text-gray-600">
                  ({trainer.reviewCount} reviews)
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{trainer.bio}</p>
              <div className="flex flex-wrap gap-2">
                {trainer.certifications.slice(0, 2).map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full flex items-center"
                  >
                    <Award size={12} className="mr-1" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
