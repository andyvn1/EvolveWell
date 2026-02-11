'use client';

export interface Review {
  author: string;
  text: string;
  rating: number;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      {/* Rating Stars */}
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < review.rating ? '★' : '☆'}</span>
        ))}
      </div>

      {/* Quote */}
      <p className="mt-4 text-gray-700 italic">"{review.text}"</p>

      {/* Author */}
      <p className="mt-3 font-semibold text-gray-900">{review.author}</p>
    </div>
  );
}
