import Link from 'next/link';
import Image from 'next/image';
import { programs } from '@/lib/data/programs';
import StarRating from '@/components/StarRating';
import { formatCurrency } from '@/lib/utils/format';
import { Clock, BarChart } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h1>
        <p className="text-xl text-gray-600">
          Self-guided programs to help you achieve your fitness goals at your own pace
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <Link
            key={program.id}
            href={`/programs/${program.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={program.imageUrl}
                alt={program.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-blue-600">
                {formatCurrency(program.price)}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                  {program.category}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                  {program.level}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{program.description}</p>
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock size={16} className="mr-1" />
                  {program.duration}
                </div>
                <div className="flex items-center">
                  <StarRating rating={program.rating} size={16} />
                  <span className="text-sm text-gray-600 ml-1">({program.reviewCount})</span>
                </div>
              </div>
              <div className="border-t pt-3">
                <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {program.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
