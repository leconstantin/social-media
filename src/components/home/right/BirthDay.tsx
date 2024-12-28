import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoGiftOutline } from "react-icons/io5";

const BirthDay = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* Top */}
      <span className="text-gray-500 font-medium">BirthDay</span>
      {/* User */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/people/2.jpg"
            alt="me"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Dian Verte</span>
        </div>

        <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
          Celebrate
        </button>
      </div>
      {/* Upcoming */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <IoGiftOutline className="h-6 w-6  cursor-pointer" />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming BirthDays
          </span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BirthDay;
