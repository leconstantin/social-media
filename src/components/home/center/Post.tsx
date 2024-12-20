import Image from "next/image";
import React from "react";
import Comments from "./Comments";

export default function Post() {
  return (
    <div className="flex flex-col gap-4 my-2">
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/people/me.jpeg"
            alt="Profile image"
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
          <span className="font-medium">Le Constantin</span>
        </div>
        <Image src="/more.png" alt="Profile image" width={16} height={16} />
      </div>
      {/* Desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="/people/5.jpg"
            alt="Post image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="text-zinc-600 hover:text-gray-800">
          On a quiet hilltop, a young boy discovered an old, rusted key buried
          beneath a lone oak tree. That night, he dreamed of a glowing door
          hidden deep in the forest, whispering his name. By dawn, the whispers
          became real, leading him to a world he'd never imagined.
        </p>
      </div>
      {/* Interaction */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="Like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span>
              1M
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="Like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span>
              765
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="Like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span>
              65
              <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>

      {/* Comments */}
      <Comments />
    </div>
  );
}
