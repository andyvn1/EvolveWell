export interface Review {
  id: string;
  trainerId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    trainerId: '1',
    userName: 'Alex Thompson',
    rating: 5,
    comment: 'Sarah is amazing! She really knows how to push you while keeping workouts safe and effective. Highly recommend!',
    date: '2026-01-28',
  },
  {
    id: '2',
    trainerId: '1',
    userName: 'Maria Garcia',
    rating: 5,
    comment: 'Best trainer I\'ve ever worked with. Her knowledge of strength training is incredible.',
    date: '2026-01-15',
  },
  {
    id: '3',
    trainerId: '2',
    userName: 'John Smith',
    rating: 5,
    comment: 'Mike\'s HIIT sessions are intense but incredibly effective. Lost 15 lbs in 2 months!',
    date: '2026-02-01',
  },
  {
    id: '4',
    trainerId: '2',
    userName: 'Lisa Brown',
    rating: 4,
    comment: 'Great workouts, very motivating. Could use more variety in exercises.',
    date: '2026-01-20',
  },
  {
    id: '5',
    trainerId: '3',
    userName: 'Emma Wilson',
    rating: 5,
    comment: 'Emily\'s yoga classes are transformative. I feel so much more flexible and centered.',
    date: '2026-02-05',
  },
  {
    id: '6',
    trainerId: '3',
    userName: 'David Lee',
    rating: 5,
    comment: 'Perfect balance of challenge and relaxation. Emily is a true professional.',
    date: '2026-01-25',
  },
];
