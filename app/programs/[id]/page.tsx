'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { programs } from '@/lib/data/programs';
import { trainers } from '@/lib/data/trainers';
import StarRating from '@/components/StarRating';
import { formatCurrency } from '@/lib/utils/format';
import { addProgramPurchase, getCurrentUserId } from '@/lib/utils/storage';
import { Clock, CheckCircle, Award, ShoppingCart } from 'lucide-react';

export default function ProgramDetailPage() {
  const params = useParams();
  const router = useRouter();
  const programId = params.id as string;
  const program = programs.find((p) => p.id === programId);
  const trainer = program ? trainers.find((t) => t.id === program.trainerId) : null;
  
  const [showCheckout, setShowCheckout] = useState(false);
  const [purchased, setPurchased] = useState(false);

  if (!program) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Program not found</h1>
      </div>
    );
  }

  const handlePurchase = () => {
    addProgramPurchase({
      programId: program.id,
      userId: getCurrentUserId(),
      progress: 0,
    });
    setPurchased(true);
  };

  if (purchased) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Program Purchased!</h1>
          <p className="text-lg text-gray-600 mb-8">
            You now have access to {program.title}. Start your journey today!
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push('/dashboard/athlete')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => router.push('/programs')}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Browse More Programs
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showCheckout) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Checkout</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Order Summary */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden mr-4">
                    <Image src={program.imageUrl} alt={program.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{program.title}</h3>
                    <p className="text-gray-600 text-sm">{program.duration}</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span>{formatCurrency(program.price)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setShowCheckout(false)}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handlePurchase}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Complete Purchase - {formatCurrency(program.price)}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="relative h-96">
          <Image
            src={program.imageUrl}
            alt={program.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                {program.category}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                {program.level}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-2">{program.title}</h1>
            <div className="flex items-center space-x-4">
              <StarRating rating={program.rating} size={20} showNumber />
              <span>({program.reviewCount} reviews)</span>
              <span className="flex items-center">
                <Clock size={18} className="mr-1" />
                {program.duration}
              </span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About This Program</h2>
              <p className="text-gray-700 mb-6">{program.description}</p>

              <h3 className="text-xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {trainer && (
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold mb-4">Created By</h3>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image src={trainer.imageUrl} alt={trainer.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{trainer.name}</h4>
                      <p className="text-gray-600">{trainer.specialty}</p>
                      <div className="flex items-center mt-1">
                        <StarRating rating={trainer.rating} size={16} />
                        <span className="text-sm text-gray-600 ml-1">({trainer.reviewCount} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-8">
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {formatCurrency(program.price)}
                  </div>
                  <p className="text-gray-600 mb-6">One-time purchase</p>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="mr-2" size={20} />
                    Buy Now
                  </button>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Award className="mr-2 text-blue-600" size={20} />
                    Lifetime Access
                  </h4>
                  <p className="text-sm text-gray-700">
                    Purchase once and access this program forever, including all future updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
