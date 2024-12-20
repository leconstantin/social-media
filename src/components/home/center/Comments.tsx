import Image from "next/image";

export default function Comments() {
  return (
    <div>
      {/* Write Comment */}
      <div className="flex items-center gap-4">
        <Image
          src="/people/me.jpeg"
          alt="profile image"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Write a comment"
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="profile image"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Comments */}
      <div>
        {/* Comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* Avatar */}
          <Image
            src="/people/2.jpg"
            alt="Profile image"
            width={40}
            height={40}
            className="rounded-full w-10 h-10"
          />
          {/* description */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium ">Ricky Lose</span>
            <p>
              That was nice i have never seen that before in my life thanks for
              sharing it.👌😍😍😍
            </p>
            <div className="flex items-center gap-8 text-gray-500 mt-2">
              <div className="flex items-center gap-4 ">
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
              <div>Reply</div>
            </div>
          </div>
          {/* Icon */}
          <Image
            src="/more.png"
            alt="Profile image"
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
}
