"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const [showContainer, setShowContainer] = useState(false);

  // Function to toggle menu visibility
  const handleToggle = () => {
    setShowContainer((prev) => !prev);
  };

  // Function to close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showContainer &&
        !(event.target as HTMLElement).closest(".menu-container")
      ) {
        setShowContainer(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showContainer]);

  return (
    <div className="flex lg:hidden relative">
      {/* Menu Toggle Button */}
      <button
        onClick={handleToggle}
        className="rounded-2xl p-2 border-2 border-black bg-gray-800"
        aria-expanded={showContainer}
        aria-label="Toggle menu"
      >
        <Image src="/menu.png" alt="Menu" width={20} height={20} />
      </button>

      {/* Dropdown Menu */}
      {showContainer && (
        <div
          className="menu-container absolute top-16 left-0 right-0 mx-auto bg-black text-white rounded-md shadow-lg z-20 p-4 mt-2 w-64"
          role="menu"
        >
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Shoes",
              "Sports Bras",
              "Tops & T-Shirts",
              "Hoodies & Sweatshirts",
              "Jackets",
              "Trousers & Tights",
              "Shorts",
              "Tracksuits",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="text-[15px] block px-2 py-1 hover:bg-gray-700 rounded-md"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
