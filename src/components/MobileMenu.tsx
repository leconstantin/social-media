"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen && "rotate-45"
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen && "opacity-0"
          } origin-left ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen && "-rotate-45"
          }  origin-left ease-in-out duration-500`}
        ></div>
      </div>
      {isOpen && (
        <div className="fixed left-0 top-24   w-screen min-h-screen z-50 h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl">
          <Link href="">Home</Link>
          <Link href="">Friends</Link>
          <Link href="">Groups</Link>
          <Link href="">Stories</Link>
          <Link href="">Profile</Link>
        </div>
      )}
    </div>
  );
}
