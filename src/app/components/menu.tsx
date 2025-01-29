'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu(){
     const [showContainer, setShowContainer] = useState(false);
        const handleToggle = () => {
          setShowContainer(!showContainer);
        };
      
        
    return(
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
                    <Link href="/"><p className="text-[15px]">Shoes</p></Link>
                  </li>
                  <li>
                    <Link href="/"><p className="text-[15px]">Sports Bras</p></Link>
                  </li>
                  <li>
                    <Link href="/"><p className="text-[15px]">Tops & T-Shirts</p></Link>
                  </li>
                  <li>
                    <Link href="/"><p className="text-[15px]">Hoodies & Sweatshirts</p></Link>
                  </li>
                  <li>
                    <Link href="/"><p className="text-[15px]">Jackets</p></Link>
                  </li>
                  <li>
                    <Link href="/"><p className="text-[15px]">Trousers & Tights</p></Link>
                  </li>
                  <li>
                    <Link href="/"><p className="text-[15px]">Shorts</p></Link>
                  </li>
                  <li>
                    <Link href="/"><p className="text-[15px]">Tracksuits</p></Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
    )
}