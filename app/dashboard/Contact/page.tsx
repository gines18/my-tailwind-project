"use client"

import Image from "next/image";
import React from "react";
import Link from 'next/link';

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mrbzgoyz");
  if (state.succeeded) {
    window.location.href = '/dashboard/Home';
   
  }

  return (
    <div className="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-gray-100 text-gray-900 rounded-lg">
      <div className="flex flex-col justify-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div className="text-gray-700 mt-8">
            Hate forms? Send us an&nbsp;
            <a className="underline mr-1" href="mailto:someone@gmail.com">
              email
            </a>
            instead.
          </div>
        </div>
        <div className="mt-12 text-center">
          <Image
            src="/coding.jpg"
            alt="Contact"
            layout="fixed"
            width={500}
            height={300}
          />
        </div>
      </div>
      <form 
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mrbzgoyz"
      method="POST"
      >
        <div>
          <span className="uppercase text-sm text-gray-600 font-bold">
            Full Name
          </span>
          <input
            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Email
          </span>
          <input
            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Phone Number
          </span>
          <input
            className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            type="number"
            name="phone"
            placeholder="Enter your Phone Number including country code"
            required
          />
          <ValidationError prefix="phone" field="phone" errors={state.errors} />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">
            Message
          </span>
          <textarea
            className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your Message"
            required
            name="message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="mt-8">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
