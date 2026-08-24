# ✈️ TravelGo - Online Travel Booking Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**"Plan Better. Travel Further."**

A modern, fast, and responsive full-stack online travel booking portal built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**.

[Explore Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [API Documentation](#-api-documentation) • [Folder Structure](#-project-structure)

</div>

---

## 🌟 Overview

**TravelGo** is a comprehensive online travel agency (OTA) demonstration platform designed to provide seamless booking experiences for Indian and global travelers. It offers unified search, selection, and simulated checkout across six primary travel verticals with instant ticket generation and real-time JSON data persistence.

---

## 🚀 Features

### 1. 🧳 6 Major Booking Verticals
- ✈️ **Flights**: Search domestic and international flight routes with one-way and round-trip filters.
- 🏨 **Hotels & Resorts**: Discover luxury stays, beach villas, and heritage palaces with amenities and price filters.
- 🚆 **Trains**: Train search with PNR status simulations, Vande Bharat Express, and Rajdhani Express routes.
- 🚌 **Buses**: Multi-axle AC Volvo and sleeper buses with boarding and dropping points.
- 🏖️ **Holidays**: Curated tour packages (Kashmir, Kerala, Rajasthan, Dubai) with complete itineraries.
- 🚖 **Outstation Cabs**: Intercity sedans and SUVs with fixed pricing and chauffeur details.

### 2. ⚡ Real-Time Booking & JSON Storage
- **Automatic Persistence**: Every booking made through the multi-step checkout or instant demo modal is written in real-time to [`package.json`](package.json) and [`data/bookings.json`](data/bookings.json) via backend API routes.
- **Instant Voucher Generation**: Generates printable e-tickets and confirmed PNRs.

### 3. 🎯 Clean & Responsive UI
- **Minimalist Aesthetic**: Clean light theme with soft slate cards, crisp typography, and mobile drawer navigation.
- **Fast Performance**: Static site generation (SSG) with zero runtime bloat.

---

## 🛠️ Tech Stack

| Technology | Version | Description |
| :--- | :--- | :--- |
| **Next.js** | `16.3.2` | React Framework (App Router, Server Components & API Routes) |
| **React** | `19.2.8` | Component Architecture & UI Hooks |
| **TypeScript** | `^5.0` | Strict static type checking |
| **Tailwind CSS** | `^4.0` | Modern utility-first CSS styling |
| **Lucide React** | `^1.34` | Crisp, scalable SVG icon set |
| **Font** | Google Fonts | Plus Jakarta Sans typography |

---

## 📂 Project Structure

```text
travel-booking/
├── app/
│   ├── api/
│   │   └── bookings/
│   │       └── route.ts          # REST API for reading & saving bookings to JSON
│   ├── booking/
│   │   └── page.tsx              # Multi-step checkout & confirmed ticket voucher
│   ├── flights/                  # Flight discovery & search
│   ├── hotels/                   # Hotel listings & detailed property view
│   ├── trains/                   # Train booking engine
│   ├── buses/                    # Bus booking engine
│   ├── cabs/                     # Outstation cab booking
│   ├── holidays/                 # Tour packages explorer
│   ├── my-trips/                 # User booking history dashboard
│   ├── globals.css               # Clean Tailwind CSS design system
│   ├── layout.tsx                # Root layout with fonts & metadata
│   └── page.tsx                  # Clean, fast landing homepage
├── components/
│   ├── Navbar.tsx                # Navigation header with mobile toggle
│   ├── Hero.tsx                  # Hero section with travel search form
│   ├── PopularDestinations.tsx   # Top destinations cards
│   ├── FeaturedHotels.tsx        # Handpicked hotels & resorts
│   ├── TravelPackages.tsx        # Holiday tour packages
│   ├── OffersSection.tsx         # Bank discount coupons & promo codes
│   ├── WhyChooseUs.tsx           # Value pillars
│   ├── CustomerReviews.tsx       # Verified traveler feedback
│   ├── Newsletter.tsx            # Email subscription form
│   └── Footer.tsx                # Footer with directory links & contact info
├── data/
│   ├── bookings.json             # Stored user bookings database
│   └── travelData.ts             # Static dataset for hotels, flights, and packages
└── package.json                  # Dependencies, scripts & synced booking records
```

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18.17.0 or higher recommended)
- npm, yarn, or pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/garvitsuryamailbox-eng/travelgo.git
cd travelgo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📡 API Documentation

### `POST /api/bookings`
Saves a new booking record to disk (`package.json` and `data/bookings.json`).

**Request Body:**
```json
{
  "type": "hotel",
  "title": "Taj Exotica Resort & Spa, Goa",
  "amount": 14997,
  "paymentMethod": "UPI (Google Pay)",
  "customer": {
    "name": "Aditya Verma",
    "email": "aditya.verma@example.com",
    "phone": "+91 9876543210"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Booking successfully saved to data/bookings.json and package.json",
  "booking": {
    "id": "BK-892145",
    "status": "CONFIRMED",
    "bookingDate": "2026-08-24T18:30:00.000Z"
  }
}
```

### `GET /api/bookings`
Returns an array of all confirmed bookings.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
