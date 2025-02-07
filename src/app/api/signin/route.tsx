import { usersInfo, User } from "@/data/users"; // Import User type
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { status: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    // ✅ Fix: Ensure TypeScript knows usersInfo is an array of User objects
    const existingUser: User | undefined = usersInfo.find((user: User) => user.email === email);

    if (!existingUser) {
      return NextResponse.json(
        { status: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return NextResponse.json(
        { status: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        status: true,
        message: "Login successful",
        user: { id: existingUser.id, name: existingUser.name, email: existingUser.email },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      {
        status: false,
        message: error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
