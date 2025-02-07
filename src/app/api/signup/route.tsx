import { usersInfo } from "@/data/users"; // Ensure correct named import
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Define User Type
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { status: false, message: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = usersInfo.find((user: User) => user.email === email);

    if (existingUser) {
      return NextResponse.json(
        { status: false, message: "User already exists" },
        { status: 409 }
      );
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser: User = {
      id: crypto.randomUUID(), // Generate a unique ID
      name,
      email,
      password: hashedPassword, // Store hashed password
    };

    usersInfo.push(newUser);

    return NextResponse.json(
      {
        status: true,
        message: "Signup successful",
        user: { id: newUser.id, name: newUser.name, email: newUser.email },
      },
      { status: 201 }
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
