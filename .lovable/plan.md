

# F1 Event Ticket & Bio-Link Hub

A premium landing page inspired by the Formula 1 visual identity — mobile-first bio-link format that transforms into a dashboard on desktop.

---

## Visual Foundation

- **Color palette:** F1 Race Red (#e10600), Carbon Deep Grey (#15151e), Pure White (#ffffff)
- **Typography:** Bold sans-serif, with titles in UPPERCASE ITALIC for that signature speed aesthetic
- **Design language:** Angular-cut buttons (diagonal corners), thin red top-borders on cards, dark premium feel

---

## Data Layer

A local `data.json` file powering all content — no database needed:
- Featured event details (title, location, date, ticket status)
- Ticket links with pricing and availability
- Social media links
- Latest news/update snippets

---

## UI Components

### 1. Live Status Header
A slim top bar with a blinking red dot animation: **"LIVE: TICKET WINDOW OPEN - SEASON 2026"** — sets the urgent, race-day tone immediately.

### 2. Hero Event Card
The centerpiece — a large, bold card for the next Grand Prix featuring:
- Race name, location, and date
- A live countdown timer ticking down to race day
- A prominent **"BUY TICKETS"** CTA button in F1 Red with angular styling

### 3. Availability List
A scrollable list of upcoming GPs, each row showing:
- Country flag emoji
- Race name
- Availability pill badge (green = Available, red = Sold Out, amber = Limited)
- Starting price

### 4. "Paddle Shift" Social Links
Wide, full-width buttons for social platforms with a chevron-right icon — styled like racing paddle indicators with the angular F1 aesthetic.

### 5. Latest Updates Section
Short news snippets displayed as compact cards with red top-border accents.

---

## Animations & Interactions

- **Staggered entrance:** All content sections animate in from the bottom using Framer Motion with sequential delays
- **Red glow hover:** Buttons emit a subtle Race Red glow on hover
- **Blinking live dot:** CSS animation on the status header
- **Smooth transitions:** Cards and links have polished hover/active states

---

## Responsive Behavior

- **Mobile:** Clean bio-link vertical stack — optimized for sharing on social media
- **Desktop:** Dashboard-style layout with a wider content area, potentially multi-column for the GP list and updates

