import Image from "next/image";
import Link from "next/link";

export default function UserInfo({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      {/* Top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-lg text-black">Leo Constantin</span>
          <span className="text-sm">@Lecon</span>
        </div>
        <p>
          Software engineer with a passion for developing innovative programs
          that expedite the efficiency and effectiveness of organizational
          success.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>Esc. Byimana</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Work at <b>Apple Inc.</b>
          </span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href="https://leconstantin.vercel.app"
              className="text-blue-500 font-medium"
            >
              leconstantin.vercerl.app
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined on 2021</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Follow
        </button>
        <span className="bg-red-400 text-white text-xs self-end p-2 rounded-md">
          Block user
        </span>
      </div>
    </div>
  );
}
