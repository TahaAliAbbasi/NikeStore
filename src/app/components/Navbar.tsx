'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [showContainer, setShowContainer] = useState(false);
  const handleToggle = () => {
    setShowContainer(!showContainer);
  };

  const [showContainer1, setShowContainer1] = useState(false);
  const handleToggle1 = () => {
    setShowContainer1(!showContainer1);
  };

  return (
    <div className="max-w-[1440px] w-full bg-white shadow-md mx-auto">
      
      <div className="w-full bg-custom1 flex items-center justify-between px-4 sm:px-8 md:px-12 h-12">
       
        <div className="flex items-center">
          <Image
            className="w-6 h-6"
            src="/Navicon1.png"
            alt="Nav Icon"
            height={24}
            width={24}
          />
        </div>

        
        <div className="flex md:hidden">
          <button
            onClick={handleToggle1}
            className="rounded-2xl p-2 border-2 border-black bg-gray-800"
          >
            <Image
              src="/menu.png"
              alt="Menu"
              width={20}
              height={20}
            />
          </button>
        </div>

        
        {showContainer1 && (
          <div className="absolute top-12 right-4 bg-black text-white rounded-md shadow-lg z-20 p-4">
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/allproducts">Find a Store</Link></li>
              <li><Link href="/help">Help</Link></li>
              <li>
                <Link href="/joinus">Join Us</Link>
              </li>
              <li>
                <Link href="/signin">Sign In</Link>
              </li>
            </ul>
          </div>
        )}

       
        <div className="hidden md:flex items-center gap-6 text-sm">
          <ul className="flex list-none gap-6">
            <li><Link href="/allproducts">All products</Link></li>
            <li>|</li>
            <li><Link href="/help">Help</Link></li>
            <li>|</li>
            <li>
              <Link href="/joinus">Join Us</Link>
            </li>
            <li>|</li>
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>

     
      <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 h-16">
        
        <div className="flex items-center gap-6">
         
          <div className="flex lg:hidden">
            <button
              onClick={handleToggle}
              className="rounded-2xl p-2 border-2 border-black bg-gray-800"
            >
              <Image
                src="/menu.png"
                alt="Menu"
                width={20}
                height={20}
              />
            </button>

            
            {showContainer && (
              <div className="absolute top-16 left-4 bg-black text-white rounded-md shadow-lg z-20 p-4 mt-8">
                <ul className="flex flex-col gap-3  text-sm">
                  <li>
                    <Link href="/">New & Featured</Link>
                  </li>
                  <li>
                    <Link href="/">Men</Link>
                  </li>
                  <li>
                    <Link href="/">Women</Link>
                  </li>
                  <li>
                    <Link href="/">Kids</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          
          <Image
            src="/Navicon2.png"
            alt="Logo"
            width={78}
            height={60}
            className="w-[78px] h-[60px]"
          />
        </div>

        
        <div className="hidden lg:flex">
          <ul className="flex list-none gap-6 text-sm">
            <li>
              <Link href="/">New & Featured</Link>
            </li>
            <li>
              <Link href="/">Men</Link>
            </li>
            <li>
              <Link href="/">Women</Link>
            </li>
            <li>
              <Link href="/">Kids</Link>
            </li>
            <li>
              <Link href="/">Sale</Link>
            </li>
            <li>
              <Link href="/">SNKRS</Link>
            </li>
          </ul>
        </div>

        
        <div className="flex items-center gap-4">
         
          <div className="flex items-center bg-custom1 rounded-full px-3 py-1">
            <Image
              src="/Searchbar.png"
              alt="Search"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-custom1 w-[80px] sm:w-[120px] text-sm px-2"
            />
          </div>

          
          <div className="flex items-center gap-3">
            <Image
              src="/Heart.png"
              alt="Wishlist"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/Bag.png"
              alt="Bag"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
