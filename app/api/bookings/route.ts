import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "bookings.json");

async function readBookings() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeBookings(bookings: any[]) {
  await fs.writeFile(filePath, JSON.stringify(bookings, null, 2), "utf-8");
}

export async function GET() {
  try {
    const bookings = await readBookings();
    return NextResponse.json({ success: true, bookings });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const newBooking = await req.json();
    const bookings = await readBookings();
    
    // Add new booking to top
    const updatedBookings = [newBooking, ...bookings];
    await writeBookings(updatedBookings);

    return NextResponse.json({
      success: true,
      message: "Booking saved to JSON successfully!",
      booking: newBooking,
      bookings: updatedBookings
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Booking ID is required" }, { status: 400 });
    }

    const bookings = await readBookings();
    const filtered = bookings.filter((b: any) => b.id !== id);
    await writeBookings(filtered);

    return NextResponse.json({
      success: true,
      message: "Booking removed from JSON successfully!",
      bookings: filtered
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
