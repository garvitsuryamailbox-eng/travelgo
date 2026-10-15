import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const usersFilePath = path.join(process.cwd(), "data", "users.json");

async function readUsers() {
  try {
    const data = await fs.readFile(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeUsers(users: any[]) {
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf-8");
}

export async function GET() {
  try {
    const users = await readUsers();
    // Return sanitized users list (without passwords)
    const sanitized = users.map(({ password, ...u }: any) => u);
    return NextResponse.json({ success: true, users: sanitized });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, name, email, password, phone } = body;
    const users = await readUsers();

    if (action === "signup") {
      const existingUser = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());
      if (existingUser) {
        return NextResponse.json(
          { success: false, message: "User with this email already exists!" },
          { status: 400 }
        );
      }

      const newUser = {
        id: `usr_${Date.now()}`,
        name: name || "Traveler",
        email: email.toLowerCase(),
        phone: phone || "+91 98765 43210",
        password: password || "password123",
        createdAt: new Date().toISOString()
      };

      const updatedUsers = [...users, newUser];
      await writeUsers(updatedUsers);

      const { password: _, ...userProfile } = newUser;
      return NextResponse.json({
        success: true,
        message: "User registered and saved to users.json successfully!",
        user: userProfile
      });
    }

    if (action === "login") {
      const existingUser = users.find((u: any) => u.email.toLowerCase() === email?.toLowerCase());
      if (!existingUser) {
        // Auto register if test user, or return user details
        const autoUser = {
          id: `usr_${Date.now()}`,
          name: name || (email ? email.split("@")[0] : "Traveler"),
          email: email?.toLowerCase() || "user@travelgo.in",
          phone: phone || "+91 98765 43210",
          password: password || "password123",
          createdAt: new Date().toISOString()
        };
        const updatedUsers = [...users, autoUser];
        await writeUsers(updatedUsers);
        const { password: _, ...profile } = autoUser;
        return NextResponse.json({
          success: true,
          message: "Login successful (New account saved to users.json)",
          user: profile
        });
      }

      const { password: _, ...userProfile } = existingUser;
      return NextResponse.json({
        success: true,
        message: "Login successful!",
        user: userProfile
      });
    }

    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
