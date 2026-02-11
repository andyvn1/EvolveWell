# EvolveWell

EvolveWell is a responsive web prototype that connects athletes with trainers. Athletes can browse or open a trainer via share link or QR code, reserve sessions, message, track progress, and buy self-guided programs. Trainers set their own rates, earn ratings, and use the platform via membership.

## Features

### For Athletes
- **Browse Trainers** - Discover certified trainers with different specialties
- **Book Sessions** - Reserve 1-on-1 training sessions with flexible time slots
- **Training Programs** - Purchase self-guided programs to follow at your own pace
- **Group Classes** - Join group fitness classes led by certified trainers
- **Messaging** - Direct communication with trainers
- **Progress Tracking** - Monitor your fitness journey through your dashboard
- **Shop** - Browse and purchase fitness equipment and supplements

### For Trainers
- **Profile Management** - Showcase your expertise, certifications, and rates
- **QR Code Sharing** - Generate QR codes for easy profile sharing
- **Booking Management** - Manage client sessions and availability
- **Earnings Tracking** - View revenue and client statistics
- **Membership Tiers** - Access tools based on membership level (Basic, Premium, Elite)
- **Gated Tools** - Advanced features for higher-tier memberships

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: lucide-react
- **QR Codes**: qrcode.react

## Pages

- `/` - Landing page with hero and features
- `/trainers` - Browse all trainers
- `/trainers/[id]` - Trainer profile with booking, share, and QR code
- `/book/[trainerId]` - Booking flow (slot selection → checkout → confirmation)
- `/messages` - Messaging interface
- `/dashboard/athlete` - Athlete dashboard
- `/dashboard/trainer` - Trainer dashboard with membership tools
- `/programs` - Browse training programs
- `/programs/[id]` - Program details and purchase
- `/classes` - Group fitness classes
- `/shop` - Equipment and supplement store

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
EvolveWell/
├── app/                      # Next.js App Router pages
│   ├── book/[trainerId]/    # Booking flow
│   ├── classes/             # Group classes
│   ├── dashboard/           # User dashboards
│   │   ├── athlete/        # Athlete dashboard
│   │   └── trainer/        # Trainer dashboard
│   ├── messages/            # Messaging system
│   ├── programs/            # Training programs
│   │   └── [id]/           # Program details
│   ├── shop/                # Shop page
│   ├── trainers/            # Trainers
│   │   └── [id]/           # Trainer profile
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/              # Reusable components
│   ├── Navigation.tsx      # Main navigation
│   ├── ReviewForm.tsx      # Review submission
│   └── StarRating.tsx      # Star rating display
├── lib/                     # Utilities and data
│   ├── data/               # Mock data
│   │   ├── trainers.ts    # Trainer data
│   │   ├── programs.ts    # Program data
│   │   ├── classes.ts     # Class data
│   │   ├── products.ts    # Shop products
│   │   └── reviews.ts     # Review data
│   └── utils/              # Utility functions
│       ├── storage.ts     # localStorage management
│       └── format.ts      # Formatting helpers
└── public/                  # Static assets
```

## Data Persistence

The application uses `localStorage` for client-side data persistence:

- **User Role** - Athlete or Trainer view
- **Bookings** - Training session reservations
- **Program Purchases** - Purchased programs and progress
- **Class Enrollments** - Enrolled group classes
- **Messages** - Conversation history

## Membership Tiers

Trainers have access to different tools based on their membership:

### Basic
- Schedule Management
- Basic Analytics

### Premium (includes Basic)
- Advanced Analytics
- Client Progress Tracking
- Custom Programs

### Elite (includes Premium)
- Video Consultation Tools
- Revenue Forecasting

## Responsive Design

The application is fully responsive with:
- Desktop navigation with icons and labels
- Mobile bottom navigation bar
- Adaptive grid layouts
- Touch-friendly interfaces

## Development Notes

This is a prototype using mock data and localStorage. For production use, consider:
- Backend API integration
- Real authentication system
- Payment gateway integration
- Database for data persistence
- Real-time messaging with WebSockets
- Image optimization and CDN
- Testing suite (Jest, Playwright)

## License

This project is for demonstration purposes.
