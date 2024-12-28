import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const FriendRequest = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Request</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* User */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/people/me.jpeg"
            alt="me"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">James Bruno</span>
        </div>
        <div className="flex gap-2">
          <FaCheckCircle className="h-5 w-5 text-blue-500 cursor-pointer" />
          <FaTimesCircle className="h-5 w-5 text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/people/me.jpeg"
            alt="me"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">James Bruno</span>
        </div>
        <div className="flex gap-2">
          <FaCheckCircle className="h-5 w-5 text-blue-500 cursor-pointer" />
          <FaTimesCircle className="h-5 w-5 text-red-500 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/people/me.jpeg"
            alt="me"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">James Bruno</span>
        </div>
        <div className="flex gap-2">
          <FaCheckCircle className="h-5 w-5 text-blue-500 cursor-pointer" />
          <FaTimesCircle className="h-5 w-5 text-red-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
