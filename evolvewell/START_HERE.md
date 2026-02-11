# EvolveWell Prototype - Getting Started

## Setup Checklist

- [ ] Navigate to the project folder: `c:\Users\andy-\EvolveWell\EvolveWell\evolvewell`
- [ ] Install dependencies: `npm install`
- [ ] Start the dev server: `npm run dev`
- [ ] Open browser: **http://localhost:3000**
- [ ] Server should show "Ready in ~2s" message
- [ ] Landing page loads with all sections visible

---

## Quick Start (2 minutes)

```bash
cd c:\Users\andy-\EvolveWell\EvolveWell\evolvewell
npm install
npm run dev
```

Then open: **http://localhost:3000**

---

## Essential Commands

```bash
npm run dev          # Start the server
npm run build        # Build for production
npm start            # Run production build
Ctrl + C             # Stop the server
```

---

## What to Try

### Landing Page
- Scroll through all sections: hero, mission, classes, trainers, programs, testimonials, founders, culture/values

### Find a Trainer
1. Click "Meet Trainers" in navbar
2. Search by trainer name or specialty
3. Click a trainer card
4. View their profile (bio, reviews, rating, QR code, availability)

### Book a Session
1. On trainer profile, click "Reserve a Session"
2. Select a date and time
3. Review booking details
4. Complete mock checkout
5. See confirmation with booking ID

### View Your Dashboard
1. Click "Sign in as Athlete" in navbar (top right)
2. Click "Dashboard"
3. See progress charts and upcoming sessions

### Test as a Trainer
1. Click "Trainer Login" in navbar
2. Click "Dashboard"
3. See trainer business tools and stats

### Browse Programs
1. Click "Programs" in navbar
2. Browse self-guided programs by category
3. Click a program to see details and lessons
4. Complete mock purchase

### Other Pages
- **Classes** - View group class schedule with capacity tracking
- **Equipment** - Browse home gym equipment
- **Messages** - Send messages to trainers

---

## How It Works

- **No Login Required** - Toggle between Athlete/Trainer roles using navbar buttons
- **No Real Payments** - All checkout flows are mock
- **Data Saved Locally** - Bookings, purchases, and messages are saved in your browser (localStorage)
- **Fully Responsive** - Open DevTools (F12) and toggle mobile view to see mobile design

---

## Project Structure

```
app/                    # All pages (landing, trainers, programs, etc.)
components/            # Reusable UI components (Navbar, Footer, TrainerCard, etc.)
lib/mockData.ts       # All mock data (trainers, programs, classes, products)
package.json          # Project config
```

---

## If Something Goes Wrong

```bash
# If server won't start
npm install

# If changes aren't showing
rm -rf .next
npm run dev

# If port 3000 is busy
npm run dev -- -p 3001
```

---

## Key Features Demonstrated

✅ Trainer discovery with search/filter  
✅ Trainer profiles with QR code sharing  
✅ 3-step booking flow (select time → checkout → confirmation)  
✅ Self-guided programs marketplace  
✅ Progress tracking dashboard with charts  
✅ Mock messaging system  
✅ Group classes with capacity tracking  
✅ Equipment shop  
✅ Role-based dashboards (athlete vs trainer)  
✅ Responsive mobile design  

---

That's it! The prototype is fully functional and ready to explore. 🚀
