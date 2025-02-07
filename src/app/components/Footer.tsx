import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] w-full bg-black text-white flex flex-col items-center justify-center mt-5 px-4 sm:px-8 md:px-12 mx-auto">
      
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-0 mt-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1170px]">
          
          <ul className="grid gap-y-3">
            <li className="pb-5 text-[14px] font-bold">Find A Store</li>
            <li className="text-[12px] font-bold">Become A Member</li>
            <li className="text-[12px] font-bold">Sign Up for Email</li>
            <li className="text-[12px] font-bold">Send Us Feedback</li>
            <li className="text-[12px] font-bold">Student Discounts</li>
          </ul>

          <ul className="grid gap-y-3">
            <li className="pb-5 text-[14px] font-bold">Get Help</li>
            <li className="text-[12px] text-gray-400">Order Status</li>
            <li className="text-[12px] text-gray-400">Delivery</li>
            <li className="text-[12px] text-gray-400">Returns</li>
            <li className="text-[12px] text-gray-400">Payment Options</li>
            <li className="text-[12px] text-gray-400">Nike.com Inquiries</li>
            <li className="text-[12px] text-gray-400">All Other Inquiries</li>
          </ul>

          <ul className="grid gap-y-3">
            <li className="pb-5 text-[14px] font-bold">About Nike</li>
            <li className="text-[12px] text-gray-400">News</li>
            <li className="text-[12px] text-gray-400">Careers</li>
            <li className="text-[12px] text-gray-400">Investors</li>
            <li className="text-[12px] text-gray-400">Sustainability</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:w-[337px] md:h-[48px] md:justify-end">
          <Image
            className="pt-4 object-contain"
            src="/socialicons.png"
            alt="Social media icons"
            width={337}
            height={37}
          />
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full mt-16 pt-4 pb-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        
        {/* Location and Copyright */}
        <div className="flex items-center gap-4">
          <Image
            src="/location.png"
            alt="Location icon"
            width={18}
            height={15}
          />
          <p className="text-[11px]">India</p>
          <p className="text-[11px] opacity-40">&copy; 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Terms and Policies */}
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 text-[11px] opacity-40">
          <li>Guides</li>
          <li>Terms of Sale</li>
          <li>Terms of Use</li>
          <li>Nike Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}
