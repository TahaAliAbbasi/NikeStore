'use client'
import handleSubmitForm from "@/actions/signupAction";
import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";

export default function Joinus() {
  const [formState, formAction] = useFormState(handleSubmitForm,undefined)
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-y-6 py-8 px-4">
     
      <div className="max-w-[530px] text-center">
        <Image
          className="w-[78.47px] h-[60px] mx-auto"
          src="/Navicon2.png"
          alt="Nike Icon"
          height={60}
          width={78.47}
        />
        <h1 className="text-[18px] font-bold mt-4">BECOME A NIKE MEMBER</h1>
        <p className="text-[14px] text-gray-500 mt-2">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>
      </div>

      
      <form action={formAction} className="w-full max-w-[324px] flex flex-col gap-y-4">
        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="email"
            placeholder="Email Address"
            className="outline-none w-full"
            aria-label="Email Address"
          />
        </div>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="password"
            placeholder="Password"
            className="outline-none w-full"
            aria-label="Password"
          />
        </div>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="text"
            placeholder="First Name"
            className="outline-none w-full"
            aria-label="First Name"
          />
        </div>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="text"
            placeholder="Last Name"
            className="outline-none w-full"
            aria-label="Last Name"
          />
        </div>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="date"
            placeholder="Date of Birth"
            className="outline-none w-full"
            aria-label="Date of Birth"
          />
        </div>
        <p className="text-[11px] text-gray-500">
          Get a Nike Member Reward every year on your birthday.
        </p>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="text"
            placeholder="Country/Region"
            className="outline-none w-full"
            aria-label="Country/Region"
          />
        </div>

        <div className="flex gap-2">
          <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3 flex-1">
            <input
              type="text"
              placeholder="Male"
              className="outline-none w-full"
              aria-label="Male"
            />
          </div>
          <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3 flex-1">
            <input
              type="text"
              placeholder="Female"
              className="outline-none w-full"
              aria-label="Female"
            />
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="signup-email-updates"
            className="cursor-pointer w-[20px] h-[20px] mt-1"
          />
          <label
            htmlFor="signup-email-updates"
            className="text-gray-500 text-[12px]"
          >
            Sign up for emails to get updates from Nike on products, offers, and
            your Member benefits.
          </label>
        </div>

        <p className="text-center text-[12px] text-gray-500 mt-2">
          By logging in, you agree to Nikes{" "}
          <span className="underline">
            Privacy Policy
          </span>{" "}
          and{" "}
          <span className="underline">
            Terms of Use
          </span>
          .
        </p>

        

        <div>
          <input
            type="submit"
            value="Join Us"
            className="w-full h-[40px] bg-black text-white rounded-[3px] hover:bg-gray-800 transition-all"
          />
        </div>

        {formState && <p className="text-sm text-red-500 mt-4 bg-red-100 p-2 border border-red-400 rounded">{formState}</p>}



      </form>

      
      <div className="text-center">
        <p className="text-gray-500">
          Already a Member?{" "}
          <Link href="/signin" className="underline">
            SIGN IN.
          </Link>
        </p>
      </div>
    </div>
  );
}
