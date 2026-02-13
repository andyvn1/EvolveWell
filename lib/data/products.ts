export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Resistance Bands Set',
    description: 'Professional-grade resistance bands in 5 different resistance levels. Perfect for home workouts and travel.',
    price: 39.99,
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600',
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
  },
  {
    id: '2',
    name: 'Adjustable Dumbbells 5-25 lbs',
    description: 'Space-saving adjustable dumbbells with easy weight adjustment. Replaces 8 pairs of traditional dumbbells.',
    price: 149.99,
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1638805931254-d1c8e935d3e4?w=600',
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
  },
  {
    id: '3',
    name: 'Yoga Mat Premium',
    description: 'Extra-thick (6mm) non-slip yoga mat with carrying strap. Eco-friendly and durable.',
    price: 49.99,
    category: 'Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600',
    rating: 4.8,
    reviewCount: 892,
    inStock: true,
  },
  {
    id: '4',
    name: 'Protein Powder - Chocolate',
    description: 'Whey protein isolate with 25g protein per serving. Great taste, mixes easily.',
    price: 54.99,
    category: 'Supplements',
    imageUrl: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600',
    rating: 4.6,
    reviewCount: 1203,
    inStock: true,
  },
  {
    id: '5',
    name: 'Foam Roller',
    description: 'High-density foam roller for muscle recovery and myofascial release. 18 inches long.',
    price: 24.99,
    category: 'Recovery',
    imageUrl: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600',
    rating: 4.7,
    reviewCount: 456,
    inStock: true,
  },
  {
    id: '6',
    name: 'Fitness Tracker Watch',
    description: 'Track your workouts, heart rate, sleep, and daily activity. Water-resistant with 7-day battery life.',
    price: 129.99,
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600',
    rating: 4.5,
    reviewCount: 789,
    inStock: true,
  },
  {
    id: '7',
    name: 'Gym Bag with Shoe Compartment',
    description: 'Spacious gym bag with separate shoe compartment, water bottle holder, and multiple pockets.',
    price: 44.99,
    category: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
    rating: 4.4,
    reviewCount: 321,
    inStock: true,
  },
  {
    id: '8',
    name: 'Pre-Workout Energy Boost',
    description: 'Clean energy pre-workout formula with natural caffeine and amino acids. No crash or jitters.',
    price: 39.99,
    category: 'Supplements',
    imageUrl: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=600',
    rating: 4.6,
    reviewCount: 678,
    inStock: false,
  },
];
