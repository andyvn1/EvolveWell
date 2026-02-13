# EvolveWell Prototype - Getting Started

## Running in GitHub Codespaces (Recommended)

### Step 1: Open the Codespace
1. Go to the GitHub repository page
2. Click the green **"<> Code"** button
3. Click the **"Codespaces"** tab
4. Click **"Create codespace on main"**
5. Wait for the Codespace to load (this takes about 1-2 minutes the first time)

### Step 2: The App Should Start Automatically
- Dependencies install automatically when the Codespace opens
- The dev server starts right after
- A popup will appear saying **"Your application running on port 3000 is available"** — click **"Open in Browser"**
- If the popup disappears, click the **PORTS** tab at the bottom of the screen, then click the globe icon next to port 3000

### Step 3: If the App Did NOT Start Automatically
Open the terminal in Codespaces (it should already be open at the bottom) and run:
```bash
bash setup.sh
```
This will install everything and start the server. Once you see **"Ready"** in the terminal, click the link or use the PORTS tab to open the app.

### Step 4: Explore the Prototype
The app opens in a new browser tab. You can now interact with the full prototype — see the **"What to Try"** section below for a walkthrough.

### Stopping and Restarting
- To **stop** the server: press `Ctrl + C` in the terminal
- To **restart** the server: type `npm run dev` in the terminal
- Your Codespace stays available for ~30 days of inactivity

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

## Key Features Demonstrated

- Trainer discovery with search/filter
- Trainer profiles with QR code sharing
- 3-step booking flow (select time, checkout, confirmation)
- Self-guided programs marketplace
- Progress tracking dashboard with charts
- Mock messaging system
- Group classes with capacity tracking
- Equipment shop
- Role-based dashboards (athlete vs trainer)
- Responsive mobile design

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

## Project Structure

```
app/                    # All pages (landing, trainers, programs, etc.)
components/            # Reusable UI components (Navbar, Footer, TrainerCard, etc.)
lib/mockData.ts       # All mock data (trainers, programs, classes, products)
package.json          # Project config
```
