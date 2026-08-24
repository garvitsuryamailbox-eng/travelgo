import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const BOOKINGS_FILE = path.join(process.cwd(), 'data', 'bookings.json');
const PACKAGE_JSON_FILE = path.join(process.cwd(), 'package.json');

// Helper to read bookings
async function getBookings() {
  try {
    const data = await fs.readFile(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// GET: Fetch all saved bookings
export async function GET() {
  const bookings = await getBookings();
  return NextResponse.json({ success: true, bookings });
}

// POST: Save a new booking into data/bookings.json and package.json
export async function POST(request: Request) {
  try {
    const newBooking = await request.json();

    const bookingRecord = {
      id: newBooking.id || 'BK-' + Math.floor(100000 + Math.random() * 900000),
      type: newBooking.type || 'travel',
      title: newBooking.title || 'Travel Booking',
      customer: {
        name: newBooking.customer?.name || newBooking.name || 'Guest User',
        email: newBooking.customer?.email || newBooking.email || 'user@example.com',
        phone: newBooking.customer?.phone || newBooking.phone || '+91 9876543210',
      },
      amount: newBooking.amount || 4999,
      status: 'CONFIRMED',
      bookingDate: new Date().toISOString(),
      paymentMethod: newBooking.paymentMethod || 'UPI / Card (Online)',
    };

    // 1. Save to data/bookings.json
    const currentBookings = await getBookings();
    currentBookings.unshift(bookingRecord);
    await fs.writeFile(BOOKINGS_FILE, JSON.stringify(currentBookings, null, 2), 'utf-8');

    // 2. Also optionally sync to package.json under a "bookings" key safely
    try {
      const pkgContent = await fs.readFile(PACKAGE_JSON_FILE, 'utf-8');
      const pkgJson = JSON.parse(pkgContent);
      pkgJson.bookings = pkgJson.bookings || [];
      pkgJson.bookings.unshift(bookingRecord);
      await fs.writeFile(PACKAGE_JSON_FILE, JSON.stringify(pkgJson, null, 2), 'utf-8');
    } catch (pkgError) {
      console.warn('Could not update package.json:', pkgError);
    }

    return NextResponse.json({
      success: true,
      message: 'Booking successfully saved to data/bookings.json and package.json',
      booking: bookingRecord,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to save booking' },
      { status: 500 }
    );
  }
}
