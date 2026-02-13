export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  certifications: string[];
  availableSlots: string[];
  membership: 'basic' | 'premium' | 'elite';
}

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    specialty: 'Strength Training',
    bio: 'Certified personal trainer with 8+ years of experience in strength training and bodybuilding. Specializing in helping clients build muscle and increase overall strength.',
    hourlyRate: 75,
    rating: 4.9,
    reviewCount: 127,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    certifications: ['NASM-CPT', 'NSCA-CSCS', 'Precision Nutrition'],
    availableSlots: ['2026-02-15T09:00', '2026-02-15T14:00', '2026-02-16T10:00', '2026-02-17T11:00'],
    membership: 'premium',
  },
  {
    id: '2',
    name: 'Mike Chen',
    specialty: 'HIIT & Cardio',
    bio: 'High-intensity interval training specialist focused on fat loss and cardiovascular health. Former college athlete with a passion for helping others achieve their fitness goals.',
    hourlyRate: 65,
    rating: 4.8,
    reviewCount: 94,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    certifications: ['ACE-CPT', 'TRX Certified'],
    availableSlots: ['2026-02-15T08:00', '2026-02-15T13:00', '2026-02-16T15:00', '2026-02-18T09:00'],
    membership: 'elite',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    specialty: 'Yoga & Flexibility',
    bio: '200-hour certified yoga instructor with expertise in various styles including Vinyasa, Hatha, and restorative yoga. Focused on mindfulness and holistic wellness.',
    hourlyRate: 60,
    rating: 5.0,
    reviewCount: 156,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    certifications: ['RYT-200', 'Prenatal Yoga', 'Meditation'],
    availableSlots: ['2026-02-15T07:00', '2026-02-15T17:00', '2026-02-16T07:00', '2026-02-19T18:00'],
    membership: 'premium',
  },
  {
    id: '4',
    name: 'David Thompson',
    specialty: 'Sports Performance',
    bio: 'Sports performance coach working with athletes to enhance their game. Specializing in speed, agility, and sport-specific conditioning.',
    hourlyRate: 85,
    rating: 4.7,
    reviewCount: 82,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    certifications: ['CSCS', 'USA Weightlifting', 'FMS'],
    availableSlots: ['2026-02-15T10:00', '2026-02-16T09:00', '2026-02-17T14:00', '2026-02-18T16:00'],
    membership: 'elite',
  },
  {
    id: '5',
    name: 'Jessica Martinez',
    specialty: 'Pilates & Core',
    bio: 'Pilates instructor passionate about building core strength and improving posture. Helping clients develop body awareness and functional movement patterns.',
    hourlyRate: 70,
    rating: 4.9,
    reviewCount: 118,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica',
    certifications: ['PMA-CPT', 'Mat & Reformer Certified'],
    availableSlots: ['2026-02-15T11:00', '2026-02-16T13:00', '2026-02-17T10:00', '2026-02-19T15:00'],
    membership: 'basic',
  },
  {
    id: '6',
    name: 'Robert Kim',
    specialty: 'CrossFit',
    bio: 'CrossFit Level 2 trainer with experience coaching group classes and personal training. Focused on functional fitness and community building.',
    hourlyRate: 80,
    rating: 4.6,
    reviewCount: 73,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
    certifications: ['CrossFit L2', 'Olympic Weightlifting'],
    availableSlots: ['2026-02-15T12:00', '2026-02-16T16:00', '2026-02-18T10:00', '2026-02-19T11:00'],
    membership: 'premium',
  },
];
