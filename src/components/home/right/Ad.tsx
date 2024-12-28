import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* Top */}
      <div className="flex  items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image
          src="/more.png"
          alt="me"
          width={16}
          height={16}
          className="w-4 h-4  object-cover"
        />
      </div>
      {/* Bottom */}
      <div
        className={`flex flex-col mt-4  ${size == "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size == "sm" ? "h-20" : size == "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="/thumbnail/meala.jpg"
            alt="ad"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-gray-500 text-xs">Cheef Restraunt</span>
            <span
              className={`font-semibold ${
                size == "sm" ? "text-xs" : "text-sm"
              }`}
            >
              Get the best food in town at affordable prices
            </span>
          </div>
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md w-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ad;
