import Image from "next/image";
import Products from "./Products";
import Allproducts from "../(pages)/(public)/allproducts/page";

export default function Homemain () {
    return (
        <div className="max-w-[1440px] w-full flex flex-col">

            
            <div className="w-full h-[58px] flex flex-col justify-center items-center bg-custom3 px-4 text-center">
                <p className="text-[15px] sm:text-[14px]">Hello Nike App</p>
                <p className="text-[11px] sm:text-[10px]">Download the app to access everything Nike. Get Your Great .</p>
            </div>

            
            <div className="w-full flex justify-center items-center px-4">
                <Image
                    className="w-full max-w-[95%]  h-auto"
                    src="/Heroimage.png"
                    alt="Hero image of home page"
                    height={700}
                    width={1344}
                />
            </div>

            
            <div className="w-full flex flex-col justify-center items-center gap-y-5 px-4 text-center">
                <p className="text-[15px] sm:text-[14px] mt-9">First Look</p>
                <h1 className="text-[32px] sm:text-[28px] md:text-[40px] lg:text-[56px] font-bold">
                    Nike Air Max Pulse
                </h1>
                <p className="text-[14px] sm:text-[12px] md:text-[15px] max-w-[511px]">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                    —designed to push you past your limits and help you go to the max.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="w-[110.58px] h-[39px] rounded-[30px] bg-black text-white text-[14px]">
                        Notify Me
                    </button>
                    <button className="w-[138.16px] h-[39px] rounded-[30px] bg-black text-white text-[14px]">
                        Shop Air Max
                    </button>
                </div>
            </div>
            <Products />
            <Allproducts />
        </div>
    );
}
