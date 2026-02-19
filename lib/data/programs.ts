export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  imageUrl: string;
  trainerId: string;
  rating: number;
  reviewCount: number;
  features: string[];
}

export const programs: Program[] = [
  {
    id: '1',
    title: '12-Week Muscle Building Program',
    description: 'A comprehensive strength training program designed to help you build lean muscle mass and increase overall strength. Includes detailed workout plans, nutrition guidance, and progress tracking.',
    duration: '12 weeks',
    price: 149,
    level: 'intermediate',
    category: 'Strength',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600',
    trainerId: '1',
    rating: 4.8,
    reviewCount: 45,
    features: [
      '4 workouts per week',
      'Progressive overload system',
      'Nutrition meal plans',
      'Video demonstrations',
      'Weekly progress check-ins',
    ],
  },
  {
    id: '2',
    title: 'Fat Loss HIIT Challenge',
    description: 'High-intensity interval training program focused on burning fat and improving cardiovascular fitness. Perfect for busy professionals.',
    duration: '8 weeks',
    price: 99,
    level: 'beginner',
    category: 'Cardio',
    imageUrl: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600',
    trainerId: '2',
    rating: 4.9,
    reviewCount: 68,
    features: [
      '20-30 minute workouts',
      '5 days per week',
      'No equipment needed',
      'Meal prep guide',
      'Community support',
    ],
  },
  {
    id: '3',
    title: '30-Day Yoga Flow',
    description: 'Daily yoga practice to improve flexibility, balance, and mindfulness. Suitable for all levels with modifications provided.',
    duration: '30 days',
    price: 79,
    level: 'beginner',
    category: 'Yoga',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600',
    trainerId: '3',
    rating: 5.0,
    reviewCount: 92,
    features: [
      'Daily 30-minute flows',
      'Meditation sessions',
      'Flexibility tracking',
      'Printable pose guides',
      'Lifetime access',
    ],
  },
  {
    id: '4',
    title: 'Athletic Performance Enhancement',
    description: 'Sport-specific training program to take your athletic performance to the next level. Includes speed, agility, and power development.',
    duration: '10 weeks',
    price: 199,
    level: 'advanced',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600',
    trainerId: '4',
    rating: 4.7,
    reviewCount: 34,
    features: [
      'Sport-specific drills',
      'Speed and agility training',
      'Power development',
      'Recovery protocols',
      'Performance testing',
    ],
  },
  {
    id: '5',
    title: 'Core Strength Fundamentals',
    description: 'Build a strong, stable core with this Pilates-based program. Perfect for improving posture and preventing back pain.',
    duration: '6 weeks',
    price: 89,
    level: 'beginner',
    category: 'Pilates',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600',
    trainerId: '5',
    rating: 4.8,
    reviewCount: 56,
    features: [
      '3 sessions per week',
      'Mat-based exercises',
      'Posture improvement',
      'Back pain relief',
      'Breathing techniques',
    ],
  },
];
