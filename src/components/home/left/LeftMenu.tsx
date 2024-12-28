import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import Link from "next/link";
import Ad from "../right/Ad";

export default function LeftMenu({ type }: { type?: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/posts.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">My Posts</span>
        </Link>
        <hr className="border-t border-gray-100 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/activity.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">Activity</span>
        </Link>
        <hr className="border-t border-gray-100 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/market.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">Market Place</span>
        </Link>
        <hr className="border-t border-gray-200 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/events.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">Events</span>
        </Link>
        <hr className="border-t border-gray-200 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/albums.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">Albums</span>
        </Link>
        <hr className="border-t border-gray-200 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/videos.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">Videos</span>
        </Link>
        <hr className="border-t border-gray-200 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/news.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">News</span>
        </Link>
        <hr className="border-t border-gray-200 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/courses.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">Courses</span>
        </Link>
        <hr className="border-t border-gray-200 w-36 self-center" />
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
        >
          <Image src="/settings.png" alt="My Posts" width={20} height={20} />
          <span className="font-semibold">Settings</span>
        </Link>
      </div>
      <Ad size="sm" />
    </div>
  );
}
