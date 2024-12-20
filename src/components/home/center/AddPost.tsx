import Image from "next/image";
import React from "react";

export default function AddPost() {
  return (
    <div className=" p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <Image
        src="/people/me.jpeg"
        alt="profile image"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* Post */}
      <div className="flex-1">
        {/* Text Input */}
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind ?"
            className="flex-1 p-2 bg-slate-100 rounded-lg"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="profile image"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* Options */}
        <div className="flex items-center flex-wrap gap-4 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addimage.png"
              alt="profile image"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer"
            />
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addvideo.png"
              alt="profile image"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer"
            />
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/poll.png"
              alt="profile image"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer"
            />
            <span>Poll</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt="profile image"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer"
            />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
}