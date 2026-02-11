export interface Trainer {
  id: string;
  name: string;
  specialties: string[];
  bio: string;
  hourlyRate: number;
  ratingStars: number;
  reviewCount: number;
  imageUrl: string;
  availability: { date: string; time: string }[];
  reviews: { author: string; text: string; rating: number }[];
}

export const trainers: Trainer[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    specialties: ["Strength Training", "HIIT", "Nutrition"],
    bio: "NASM-certified personal trainer with 8+ years of experience helping athletes build strength and achieve their goals.",
    hourlyRate: 75,
    ratingStars: 4.9,
    reviewCount: 47,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    availability: [
      { date: "2026-02-12", time: "08:00" },
      { date: "2026-02-12", time: "10:00" },
      { date: "2026-02-12", time: "14:00" },
      { date: "2026-02-13", time: "09:00" },
      { date: "2026-02-13", time: "16:00" },
    ],
    reviews: [
      {
        author: "Alex Johnson",
        text: "Sarah transformed my fitness routine. Her attention to detail and personalized approach made all the difference!",
        rating: 5,
      },
      {
        author: "Maria Garcia",
        text: "Professional, knowledgeable, and incredibly motivating. Highly recommend!",
        rating: 5,
      },
      {
        author: "James Chen",
        text: "Great form corrections and programming. Made real progress in 3 months.",
        rating: 4,
      },
    ],
  },
  {
    id: "2",
    name: "Marcus Williams",
    specialties: ["Yoga", "Flexibility", "Mind-Body"],
    bio: "RYT-200 yoga instructor focused on helping clients build strength through mindful movement and sustainable practice.",
    hourlyRate: 60,
    ratingStars: 4.8,
    reviewCount: 32,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    availability: [
      { date: "2026-02-11", time: "07:00" },
      { date: "2026-02-11", time: "18:00" },
      { date: "2026-02-12", time: "07:00" },
      { date: "2026-02-14", time: "10:00" },
    ],
    reviews: [
      {
        author: "Emma Wilson",
        text: "Marcus has an amazing ability to help you find your edge. Classes are challenging yet peaceful.",
        rating: 5,
      },
      {
        author: "David Lee",
        text: "Perfect blend of strength and flexibility work. Highly recommended.",
        rating: 5,
      },
      {
        author: "Lisa Brown",
        text: "Very patient and encouraging. Great for beginners and experienced practitioners alike.",
        rating: 4,
      },
    ],
  },
  {
    id: "3",
    name: "Jessica Rodriguez",
    specialties: ["Endurance Training", "Running", "Cross-training"],
    bio: "Certified running coach with a passion for helping endurance athletes reach their peak performance.",
    hourlyRate: 70,
    ratingStars: 4.7,
    reviewCount: 25,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    availability: [
      { date: "2026-02-11", time: "06:00" },
      { date: "2026-02-12", time: "06:00" },
      { date: "2026-02-13", time: "15:00" },
      { date: "2026-02-15", time: "08:00" },
    ],
    reviews: [
      {
        author: "Tom Anderson",
        text: "Jessica helped me break my marathon PR. Excellent programming and support!",
        rating: 5,
      },
      {
        author: "Rachel Green",
        text: "Knowledgeable about running mechanics and injury prevention. Felt stronger than ever.",
        rating: 5,
      },
      {
        author: "Kevin Murphy",
        text: "Great coaching style. Flexible with scheduling.",
        rating: 4,
      },
    ],
  },
  {
    id: "4",
    name: "David Chen",
    specialties: ["Strength & Conditioning", "Athletic Performance", "Form Correction"],
    bio: "Strength coach with 10+ years working with competitive athletes. Specializes in power development and injury prevention.",
    hourlyRate: 85,
    ratingStars: 4.9,
    reviewCount: 38,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    availability: [
      { date: "2026-02-12", time: "11:00" },
      { date: "2026-02-12", time: "15:00" },
      { date: "2026-02-13", time: "11:00" },
      { date: "2026-02-14", time: "14:00" },
    ],
    reviews: [
      {
        author: "Michael Scott",
        text: "David's approach to programming is scientific and results-driven. Saw strength gains immediately.",
        rating: 5,
      },
      {
        author: "Amanda Foster",
        text: "Expert form correction. Feels great knowing my technique is perfect.",
        rating: 5,
      },
      {
        author: "Chris Taylor",
        text: "Professional and knowledgeable. Worth every penny.",
        rating: 4,
      },
    ],
  },
];

export const classSchedule = [
  {
    id: "1",
    name: "Intermediate Vinyasa Yoga",
    time: "4:00-5:00 PM",
    duration: "60 min",
    instructor: "Marcus Williams",
    level: "Intermediate",
  },
  {
    id: "2",
    name: "HIIT Bootcamp",
    time: "5:00-6:00 PM",
    duration: "60 min",
    instructor: "Sarah Mitchell",
    level: "Intermediate",
  },
  {
    id: "3",
    name: "Strength & Conditioning",
    time: "7:00-8:00 PM",
    duration: "60 min",
    instructor: "David Chen",
    level: "All Levels",
  },
];

export const programs = [
  {
    id: "1",
    name: "Yoga Fundamentals",
    category: "Yoga & Pilates",
    description: "Learn the foundations of yoga with guided sequences designed for beginners.",
    price: 29.99,
    duration: "4 weeks",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
    lessons: [
      { title: "Introduction to Yoga", content: "Learn the basics of breathing and alignment." },
      { title: "Foundation Poses", content: "Master essential poses for your practice." },
      { title: "Building Sequences", content: "Learn how to combine poses into flowing sequences." },
      { title: "Mindfulness Practice", content: "Deepen your meditation and mindfulness skills." },
    ],
  },
  {
    id: "2",
    name: "Complete Pilates Core",
    category: "Yoga & Pilates",
    description: "Strengthen your core with targeted Pilates exercises and techniques.",
    price: 34.99,
    duration: "6 weeks",
    imageUrl: "https://images.unsplash.com/photo-1518611505868-48f4f9f9dc66?w=400&h=300&fit=crop",
    lessons: [
      { title: "Pilates Fundamentals", content: "Understand the core principles of Pilates." },
      { title: "Mat Work", content: "Essential exercises on the Pilates mat." },
      { title: "Core Strength", content: "Build serious abdominal and back strength." },
      { title: "Advanced Sequences", content: "Combine movements into dynamic flowing sequences." },
      { title: "Flexibility Integration", content: "Add flexibility work to your practice." },
      { title: "Mind-Body Connection", content: "Deepen the mental aspects of your practice." },
    ],
  },
  {
    id: "3",
    name: "Muscle Building Blueprint",
    category: "Build Muscle",
    description: "A complete program to build muscle mass with progressive resistance training.",
    price: 49.99,
    duration: "12 weeks",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=300&fit=crop",
    lessons: [
      { title: "Nutrition for Growth", content: "Eat for muscle building success." },
      { title: "Chest & Triceps", content: "Build upper body strength and size." },
      { title: "Back & Biceps", content: "Develop a strong, muscular back." },
      { title: "Legs & Glutes", content: "Build powerful lower body muscles." },
      { title: "Shoulder Development", content: "Create rounded, strong shoulders." },
      { title: "Advanced Programming", content: "Periodization and progressive overload techniques." },
      { title: "Recovery Protocols", content: "Optimize rest and recovery." },
      { title: "Supplementation Guide", content: "Smart supplementation for results." },
      { title: "Progress Tracking", content: "Monitor and measure your gains." },
      { title: "Troubleshooting Plateaus", content: "Break through sticking points." },
      { title: "Mental Resilience", content: "Stay motivated and consistent." },
      { title: "Lifestyle Integration", content: "Maintain your gains long-term." },
    ],
  },
  {
    id: "4",
    name: "Endurance Athlete Starter",
    category: "Endurance Strength",
    description: "Build endurance and strength with this comprehensive program for runners and cyclists.",
    price: 39.99,
    duration: "8 weeks",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    lessons: [
      { title: "Aerobic Foundation", content: "Build your aerobic base safely." },
      { title: "Running Form", content: "Perfect your running mechanics." },
      { title: "Tempo Work", content: "Increase your lactate threshold." },
      { title: "Strength for Runners", content: "Prevent injuries with key strength work." },
      { title: "Long Distance Training", content: "Build capacity for longer efforts." },
      { title: "Speed Work", content: "Develop explosive power and speed." },
      { title: "Cross Training", content: "Complement your running with other activities." },
      { title: "Race Preparation", content: "Prepare for race day success." },
    ],
  },
  {
    id: "5",
    name: "HIIT Burnout Bootcamp",
    category: "Endurance Strength",
    description: "High-intensity interval training to boost metabolism and build lean muscle.",
    price: 24.99,
    duration: "4 weeks",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    lessons: [
      { title: "HIIT Fundamentals", content: "Learn the science behind high-intensity intervals." },
      { title: "Cardio Burners", content: "Intense cardio-focused workouts." },
      { title: "Strength HIIT", content: "Combine strength and intervals." },
      { title: "Recovery & Nutrition", content: "Fuel your intense training." },
    ],
  },
  {
    id: "6",
    name: "Beginner Strength Foundation",
    category: "Build Muscle",
    description: "Start your strength journey with fundamental exercises and form coaching.",
    price: 19.99,
    duration: "4 weeks",
    imageUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    lessons: [
      { title: "Getting Started", content: "Prepare your body and mindset." },
      { title: "Basic Movement Patterns", content: "Master fundamental exercises." },
      { title: "First Workout Programs", content: "Your first structured workouts." },
      { title: "Tracking Progress", content: "Monitor your improvements." },
    ],
  },
];

export const products = [
  { id: "1", name: "Adjustable Dumbbells (5-25 lbs)", price: 149.99, description: "Perfect for home workouts. Adjustable from 5 to 25 pounds.", imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop", category: "Weights" },
  { id: "2", name: "Yoga Mat Pro", price: 59.99, description: "Premium non-slip yoga mat with alignment markers.", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop", category: "Yoga" },
  { id: "3", name: "Resistance Band Set", price: 29.99, description: "5-piece set with varying resistance levels.", imageUrl: "https://images.unsplash.com/photo-1518611505868-48f4f9f9dc66?w=400&h=300&fit=crop", category: "Accessories" },
  { id: "4", name: "Foam Roller", price: 39.99, description: "High-density foam roller for recovery and mobility.", imageUrl: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=300&fit=crop", category: "Recovery" },
  { id: "5", name: "Pull-Up Bar", price: 44.99, description: "Heavy-duty pull-up bar for doorway installation.", imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop", category: "Weights" },
  { id: "6", name: "Kettlebell (20 lbs)", price: 49.99, description: "Cast iron kettlebell for functional strength training.", imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop", category: "Weights" },
];

export const testimonials = [
  { name: "Alex Johnson", role: "Marketing Manager", text: "EvolveWell connected me with Sarah, and I've never felt stronger. Real human feedback makes all the difference.", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { name: "Emma Wilson", role: "Software Engineer", text: "I was skeptical about online coaching, but Marcus's approach is incredible. The progress tracking keeps me accountable.", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { name: "Tom Anderson", role: "Data Analyst", text: "Jessica helped me achieve my marathon PR. The structured coaching made every mile count.", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { name: "Rachel Green", role: "Project Manager", text: "No more generic AI workouts. EvolveWell's trainers adjust my plan based on my actual progress. Life-changing.", imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
];

export const founders = [
  { name: "Yahya Abatorab", role: "Co-founder" },
  { name: "Andy Vargas", role: "Co-founder" },
  { name: "Oliver Giesller", role: "Co-founder" },
  { name: "Yahya Daud", role: "Co-founder" },
];

export const coreValues = ["Respect", "Growth", "Open Communication"];
export const principles = ["Clarity", "Ownership", "Quality", "Continuous Improvement", "Innovation", "Support"];
