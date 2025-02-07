"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Function to close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showMainMenu &&
        !(event.target as HTMLElement).closest(".main-menu")
      ) {
        setShowMainMenu(false);
      }
      if (
        showUserMenu &&
        !(event.target as HTMLElement).closest(".user-menu")
      ) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMainMenu, showUserMenu]);

  return (
    <nav className="max-w-[1440px] w-full bg-white shadow-md mx-auto">
      
      {/* Top Bar */}
      <div className="w-full bg-custom1 flex items-center justify-between px-4 sm:px-8 md:px-12 h-12">
        
        {/* Left Icon */}
        <div className="flex items-center">
          <Image src="/Navicon1.png" alt="Nav Icon" height={24} width={24} />
        </div>

        {/* User Menu Button (Mobile) */}
        <div className="flex md:hidden">
          <button
            onClick={() => setShowUserMenu((prev) => !prev)}
            className="rounded-2xl p-2 border-2 border-black bg-gray-800 user-menu"
            aria-expanded={showUserMenu}
            aria-label="User menu"
          >
            <Image src="/menu.png" alt="Menu" width={20} height={20} />
          </button>
        </div>

        {/* User Menu (Mobile) */}
        {showUserMenu && (
          <div
            className="absolute top-12 right-4 bg-black text-white rounded-md shadow-lg z-50 p-4 w-48 user-menu"
            role="menu"
          >
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/allproducts">Find a Store</Link></li>
              <li><Link href="/help">Help</Link></li>
              <li><Link href="/joinus">Join Us</Link></li>
              <li><Link href="/signin">Sign In</Link></li>
            </ul>
          </div>
        )}

        {/* User Menu (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <ul className="flex list-none gap-6">
            <li><Link href="/allproducts">All products</Link></li>
            <li>|</li>
            <li><Link href="/help">Help</Link></li>
            <li>|</li>
            <li><Link href="/joinus">Join Us</Link></li>
            <li>|</li>
            <li><Link href="/signin">Sign In</Link></li>
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 h-16">
        
        {/* Left Section */}
        <div className="flex items-center gap-6">
          
          {/* Main Menu Button (Mobile) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setShowMainMenu((prev) => !prev)}
              className="rounded-2xl p-2 border-2 border-black bg-gray-800 main-menu"
              aria-expanded={showMainMenu}
              aria-label="Main menu"
            >
              <Image src="/menu.png" alt="Menu" width={20} height={20} />
            </button>
          </div>

          {/* Main Menu (Mobile) */}
          {showMainMenu && (
            <div
              className="absolute top-16 left-0 right-0 mx-auto bg-black text-white rounded-md shadow-lg z-50 p-4 w-64 main-menu"
              role="menu"
            >
              <ul className="flex flex-col gap-3 text-sm">
                {["New & Featured", "Men", "Women", "Kids"].map((item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="block px-2 py-1 hover:bg-gray-700 rounded-md"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Logo */}
          <Image src="/Navicon2.png" alt="Logo" width={78} height={60} />
        </div>

        {/* Main Navigation (Desktop) */}
        <div className="hidden lg:flex">
          <ul className="flex list-none gap-6 text-sm">
            {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
              (item) => (
                <li key={item}>
                  <Link href="/">{item}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* Search Bar */}
          <div className="flex items-center bg-custom1 rounded-full px-3 py-1">
            <Image src="/Searchbar.png" alt="Search" width={20} height={20} />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-custom1 w-[80px] sm:w-[120px] text-sm px-2"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <Image src="/Heart.png" alt="Wishlist" width={24} height={24} className="cursor-pointer" />
            <Image src="/Bag.png" alt="Bag" width={24} height={24} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
