'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function LogOutAction() {
    cookies().delete("token"); // Proper way to remove a cookie
    redirect("/signin");
}