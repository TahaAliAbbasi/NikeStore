"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import * as jose from "jose";

const handleSubmitForm = async (_prevState: unknown, formData: FormData) => {
    try {
        const fields = {
            email: formData.get("email"),
            password: formData.get("password")
        };

        // Post data to API for login
        const response = await fetch("http://localhost:3000/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        });

        const data = await response.json();

        // Return an error if login fails
        if (!response.ok) {
            return { success: false, message: data.message || "Invalid credentials", error: true };
        }

        const user = data.user;

        // Ensure JWT secret is defined
        if (!process.env.SECRET) {
            return { success: false, message: "Server error: Missing SECRET key", error: true };
        }

        // Generate JWT token
        const payload = { user };
        const secret = new TextEncoder().encode(process.env.SECRET);
        const alg = "HS256";

        const token = await new jose.SignJWT(payload)
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setSubject(user.id.toString())
            .setExpirationTime("15m") // Token valid for 15 minutes
            .sign(secret);

        // Save token in cookie
        cookies().set("token", token, {
            expires: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes expiration
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            sameSite: "strict"
        });

        // Redirect on success
        redirect("/dashboard");

        return { success: true, message: "Sign-in successful", error: false }; // This line won't execute due to redirect
    } catch (error) {
        console.error("Sign-in Error:", error);
        return { success: false, message: error instanceof Error ? error.message : "An unknown error occurred", error: true };
    }
};

export default handleSubmitForm;
