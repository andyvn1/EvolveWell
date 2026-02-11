'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { trainers } from '@/lib/data/trainers';
import { reviews } from '@/lib/data/reviews';
import StarRating from '@/components/StarRating';
import ReviewForm from '@/components/ReviewForm';
import { formatCurrency } from '@/lib/utils/format';
import { Award, Calendar, Share2, QrCode, CheckCircle, Crown } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function TrainerPage() {
  const params = useParams();
  const trainerId = params.id as string;
  const trainer = trainers.find((t) => t.id === trainerId);
  const trainerReviews = reviews.filter((r) => r.trainerId === trainerId);
  
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!trainer) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Trainer not found</h1>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmitReview = (rating: number, comment: string) => {
    console.log('Review submitted:', { rating, comment });
    setShowReviewForm(false);
    alert('Thank you for your review!');
  };

  const getMembershipBadge = () => {
    const badges = {
      basic: { color: 'bg-gray-100 text-gray-700', icon: CheckCircle },
      premium: { color: 'bg-blue-100 text-blue-700', icon: Award },
      elite: { color: 'bg-purple-100 text-purple-700', icon: Crown },
    };
    const badge = badges[trainer.membership];
    const Icon = badge.icon;
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center ${badge.color}`}>
        <Icon size={16} className="mr-1" />
        {trainer.membership.charAt(0).toUpperCase() + trainer.membership.slice(1)} Member
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="md:flex">
          <div className="md:w-1/3 relative h-96">
            <Image
              src={trainer.imageUrl}
              alt={trainer.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-2/3 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{trainer.name}</h1>
                <p className="text-xl text-blue-600 font-medium mb-3">{trainer.specialty}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <StarRating rating={trainer.rating} size={20} showNumber />
                  <span className="text-gray-600">({trainer.reviewCount} reviews)</span>
                </div>
                {getMembershipBadge()}
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatCurrency(trainer.hourlyRate)}
                </div>
                <div className="text-gray-600">per hour</div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">{trainer.bio}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Award className="mr-2" size={20} />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {trainer.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/book/${trainer.id}`}
                className="flex-1 min-w-[200px] px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Reserve Session
              </Link>
              <button
                onClick={handleCopyLink}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
              >
                <Share2 className="mr-2" size={20} />
                {copied ? 'Copied!' : 'Share Link'}
              </button>
              <button
                onClick={() => setShowQR(!showQR)}
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center"
              >
                <QrCode className="mr-2" size={20} />
                QR Code
              </button>
            </div>

            {/* QR Code Modal */}
            {showQR && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-4">Scan to View Trainer Profile</h3>
                <div className="inline-block p-4 bg-white rounded-lg">
                  <QRCodeSVG value={shareUrl} size={200} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Reviews</h2>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showReviewForm ? 'Cancel' : 'Write a Review'}
            </button>
          </div>

          {showReviewForm && (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <ReviewForm onSubmit={handleSubmitReview} />
            </div>
          )}

          <div className="space-y-6">
            {trainerReviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{review.userName}</h4>
                  <span className="text-sm text-gray-600">{review.date}</span>
                </div>
                <StarRating rating={review.rating} size={16} />
                <p className="text-gray-700 mt-2">{review.comment}</p>
              </div>
            ))}
            {trainerReviews.length === 0 && (
              <p className="text-gray-600 text-center py-8">
                No reviews yet. Be the first to review!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
