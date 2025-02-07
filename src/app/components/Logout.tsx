'use client'

import { LogOutAction } from "@/actions/logoutAction";

export default function Logout() {
    const handleLogout = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent any unwanted navigation
        await LogOutAction(); // Ensure logout completes before redirecting
    };

    return (
        <button
            onClick={handleLogout}
            className="text-gray-300 hover:text-white transition duration-300"
        >
            Logout
        </button>
    );
}
