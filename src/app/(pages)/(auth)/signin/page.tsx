'use client'
import handleSubmitForm from "@/actions/signinAction";
import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
  const [formState, formAction] = useFormState(handleSubmitForm,undefined)
  return (
    <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-y-6 py-8 px-4">
      <div className="max-w-[530px] text-center">
        <Image
          className="w-[78.47px] h-[60px] mx-auto"
          src="/Navicon2.png"
          alt="Nike Icon"
          height={60}
          width={78.47}
        />
        <h1 className="text-[18px] font-bold mt-4">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
      </div>
      <form  action={formAction} className="w-full max-w-[324px] flex flex-col gap-y-4">
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
        <div className="flex justify-between items-center text-gray-500 text-[12px]">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="signin-keep"
              className="cursor-pointer"
            />
            <label htmlFor="signin-keep" className="cursor-pointer">
              Keep me signed in
            </label>
          </div>
          <p className="cursor-pointer">Forgotten your password?</p>
        </div>
        <p className="text-center text-[12px] text-gray-500 mt-2">
          By logging in, you agree to Nikes{" "}
          <span className="underline">Privacy Policy</span>
           
            
        
          and{" "}
          <span className="underline">
            Terms of Use
          </span>
          .
        </p>
        

        <div>
          <input
          type="submit"
          value="SIGN IN"
          className="w-full h-[40px] bg-black text-white rounded-[3px] hover:bg-gray-800 transition-all"
          />
        </div>
        
        {formState && <p className="text-sm text-red-500 mt-4 bg-red-100 p-2 border border-red-400 rounded">{formState}</p>}

      </form>
      <div className="flex text-[12px] text-gray-500">
        <p>Not a Member? </p>
        <Link href="/joinus" className="ml-1 underline">
          Join Us.
        </Link>
      </div>
    </div>
  );
}
