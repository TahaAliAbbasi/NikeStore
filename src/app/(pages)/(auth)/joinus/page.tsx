"use client";

import handleSubmitForm from "@/actions/signupAction";
import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Joinus() {
  const [formState, formAction] = useFormState(handleSubmitForm, undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      <form
        action={async (formData) => {
          setIsSubmitting(true);
          await formAction(formData);
          setIsSubmitting(false);
        }}
        className="w-full max-w-[324px] flex flex-col gap-y-4"
      >
        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="outline-none w-full"
            aria-label="Email Address"
            required
          />
        </div>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="outline-none w-full"
            aria-label="Password"
            required
          />
        </div>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="outline-none w-full"
            aria-label="First Name"
            required
          />
        </div>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="outline-none w-full"
            aria-label="Last Name"
            required
          />
        </div>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="date"
            name="dob"
            className="outline-none w-full"
            aria-label="Date of Birth"
            required
          />
        </div>
        <p className="text-[11px] text-gray-500">
          Get a Nike Member Reward every year on your birthday.
        </p>

        <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3">
          <input
            type="text"
            name="country"
            placeholder="Country/Region"
            className="outline-none w-full"
            aria-label="Country/Region"
            required
          />
        </div>

        <div className="flex gap-2">
          <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3 flex-1">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              className="cursor-pointer"
              required
            />
            <label htmlFor="male" className="ml-2 text-gray-500">Male</label>
          </div>
          <div className="border border-custom4 rounded-[3px] h-[40px] flex items-center px-3 flex-1">
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              className="cursor-pointer"
              required
            />
            <label htmlFor="female" className="ml-2 text-gray-500">Female</label>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="newsletter"
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
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Terms of Use</span>.
        </p>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full h-[40px] rounded-[3px] transition-all ${
              isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Join Us"}
          </button>
        </div>

        {/* Error Message */}
        {formState?.error && (
          <p className="text-sm text-red-500 mt-4 bg-red-100 p-2 border border-red-400 rounded">
            {formState.error}
          </p>
        )}

        {/* Success Message */}
        {formState?.success && (
          <p className="text-sm text-green-600 mt-4 bg-green-100 p-2 border border-green-400 rounded">
            {formState.message}
          </p>
        )}
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
