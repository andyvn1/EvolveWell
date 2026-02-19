export interface Class {
  id: string;
  title: string;
  description: string;
  trainerId: string;
  date: string;
  duration: number;
  capacity: number;
  enrolled: number;
  price: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: string;
}

export const classes: Class[] = [
  {
    id: '1',
    title: 'Power Hour Strength',
    description: 'Full-body strength training class focusing on compound movements and progressive overload.',
    trainerId: '1',
    date: '2026-02-15T09:00',
    duration: 60,
    capacity: 15,
    enrolled: 12,
    price: 25,
    category: 'Strength',
    level: 'intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600',
  },
  {
    id: '2',
    title: 'Morning HIIT Blast',
    description: 'Start your day with high-intensity cardio to burn calories and boost energy.',
    trainerId: '2',
    date: '2026-02-15T07:00',
    duration: 45,
    capacity: 20,
    enrolled: 18,
    price: 20,
    category: 'Cardio',
    level: 'beginner',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
  },
  {
    id: '3',
    title: 'Evening Yoga Flow',
    description: 'Wind down with a relaxing yoga flow suitable for all levels.',
    trainerId: '3',
    date: '2026-02-15T18:00',
    duration: 60,
    capacity: 25,
    enrolled: 20,
    price: 18,
    category: 'Yoga',
    level: 'beginner',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600',
  },
  {
    id: '4',
    title: 'Athletic Conditioning',
    description: 'Sport-specific training for athletes looking to improve performance.',
    trainerId: '4',
    date: '2026-02-16T10:00',
    duration: 90,
    capacity: 12,
    enrolled: 8,
    price: 35,
    category: 'Sports',
    level: 'advanced',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600',
  },
  {
    id: '5',
    title: 'Pilates Core Fusion',
    description: 'Core-focused Pilates class to improve stability and posture.',
    trainerId: '5',
    date: '2026-02-16T11:00',
    duration: 50,
    capacity: 15,
    enrolled: 10,
    price: 22,
    category: 'Pilates',
    level: 'intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600',
  },
  {
    id: '6',
    title: 'CrossFit Fundamentals',
    description: 'Learn the basics of CrossFit in this beginner-friendly class.',
    trainerId: '6',
    date: '2026-02-17T14:00',
    duration: 60,
    capacity: 18,
    enrolled: 15,
    price: 28,
    category: 'CrossFit',
    level: 'beginner',
    imageUrl: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600',
  },
];
