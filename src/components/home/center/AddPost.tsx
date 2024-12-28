import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import React from "react";

export default async function AddPost() {
  const { userId } = await auth();
  console.log(userId);
  // const testAction = async (formData: FormData) => {
  //   "use server";
  //   if (!userId) return;
  //   const desc = formData.get("desc") as string;
  //   try {
  //     const res = await prisma.post.create({
  //       data: {
  //         userId: userId,
  //         desc: desc,
  //       },
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
        <form action="" className="flex gap-4">
          <textarea
            name="desc"
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
          <button>send</button>
        </form>
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
