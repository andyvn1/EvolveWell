# EvolveWell - Interactive Coaching Platform Prototype

A fully responsive web prototype for EvolveWell, connecting athletes with expert personal trainers. Built with Next.js, TypeScript, and Tailwind CSS.

**👉 [START_HERE.md](./START_HERE.md) - Read this first!**

---

## 🚀 Quick Start

```bash
cd c:\Users\andy-\EvolveWell\EvolveWell\evolvewell
npm install
npm run dev
```

Visit: **http://localhost:3000**

---

## ✨ Key Features

### For Athletes
- **Find Trainers**: Browse and filter trainers by specialty, rating, and rate
- **Book Sessions**: Reserve training sessions with available time slots
- **Progress Tracking**: Visual dashboard with weight progress and session tracking
- **Direct Messaging**: Chat directly with trainers for feedback and adjustments
- **Self-Guided Programs**: Purchase and access expert-designed workout programs
- **Group Classes**: Reserve spots in live group training sessions

### For Trainers
- **Trainer Toolkit**: Manage rates, availability, and bookings
- **Client Discovery**: Share profile via link and QR code
- **Reputation Building**: Display star ratings and client reviews
- **Program Creation**: Design and sell self-guided programs
- **Membership Status**: Access to professional coaching tools

### Additional Features
- **Landing Page**: Hero, mission, group classes, testimonials, founders, culture/values
- **Equipment Shop**: Browse and order home gym equipment
- **Responsive Design**: Mobile-first, works on all devices
- **Mock Authentication**: Toggle between athlete and trainer roles
- **Local Storage**: Bookings, purchases, and messages persist in browser

## ��� Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
cd evolvewell
npm install
npm run dev
```

The app will be available at `http://localhost:3000`

## ��� Core Routes

### Landing & Discovery
- `/` - Landing page with all sections
- `/trainers` - Trainer listing with search/filters
- `/trainers/[id]` - Trainer profile with QR code and reviews
- `/classes` - Group class schedule
- `/shop` - Home gym equipment store
- `/programs` - Self-guided programs marketplace

### Booking & Checkout
- `/book/[trainerId]` - Reserve a session (multi-step flow)

### User Dashboards
- `/dashboard/athlete` - Athlete progress tracking and bookings
- `/dashboard/trainer` - Trainer toolkit and business settings

### Communication
- `/messages` - Messaging center between athletes and trainers

## ��� Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Success**: Green (#22c55e)

### Reusable Components
- `Navbar` - Navigation with role toggle
- `Footer` - Site footer with links
- `TrainerCard` - Trainer listing card
- `ProgramCard` - Program card with purchase
- `ClassCard` - Group class card
- `ProductCard` - Equipment card
- `ReviewCard` - Testimonial card
- `QRCodeCard` - QR code for profile sharing

## ��� Data & Storage

### Mock Data (lib/mockData.ts)
- 4 featured trainers with ratings and reviews
- 6 self-guided programs across 3 categories
- 3 group classes with schedule
- 6 home gym products
- 4 testimonials and 4 founders

### Local Storage (lib/storage.ts)
- User role (athlete/trainer/null)
- Bookings with confirmation
- Program purchases with access
- Trainer profiles and rates
- Direct messages and conversations

## ��� Key User Flows

### Athlete Flow
1. View landing → Browse trainers → View profile
2. Click "Reserve" → Select time → Confirm booking
3. Message trainer → Receive responses
4. View progress dashboard with charts
5. Browse programs → Purchase → Access lessons

### Trainer Flow
1. Toggle trainer role in navbar
2. Access trainer dashboard
3. View bookings and client list
4. Edit hourly rate
5. Share profile link or QR code
6. Create self-guided programs

## ���️ Technology Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts (responsive visualizations)
- **QR Codes**: qrcode library
- **State**: React hooks + localStorage

## ��� Project Structure

```
components/      # Reusable components
lib/            # Mock data and utilities
app/            # Next.js App Router pages
  ├── page.tsx                    # Landing
  ├── trainers/page.tsx           # Trainer list
  ├── trainers/[id]/page.tsx      # Trainer profile
  ├── book/[trainerId]/page.tsx   # Booking flow
  ├── programs/page.tsx           # Programs
  ├── programs/[id]/page.tsx      # Program detail
  ├── classes/page.tsx            # Classes
  ├── shop/page.tsx               # Equipment
  ├── messages/page.tsx           # Messaging
  ├── dashboard/athlete/page.tsx  # Athlete dashboard
  └── dashboard/trainer/page.tsx  # Trainer dashboard
```

## ��� Deployment to Vercel

```bash
npm i -g vercel
vercel
```

## ��� Demo Instructions

### As Athlete:
1. Click "Athlete" in navbar
2. Go to `/trainers` → find trainer
3. Click "Reserve a Session"
4. Complete multi-step booking
5. Check `/messages` to chat
6. View `/dashboard/athlete` for progress

### As Trainer:
1. Click "Trainer" in navbar
2. Visit `/dashboard/trainer`
3. Edit rate and availability
4. Share profile link or QR code
5. View client bookings

### Browse Marketplace:
1. `/programs` - Browse and purchase programs
2. `/shop` - Browse and order equipment
3. `/classes` - Reserve group classes

## ✅ Features Implemented

✅ Complete landing page
✅ Trainer discovery with filters
✅ Trainer profiles with QR codes
✅ Multi-step booking with confirmation
✅ Athlete progress dashboard with charts
✅ Trainer business toolkit
✅ Direct messaging system
✅ Self-guided programs marketplace
✅ Group class reservations
✅ Equipment shop
✅ Mock payment checkout
✅ Responsive mobile design
✅ Local storage persistence

## ��� License

© 2026 EvolveWell. All rights reserved.
