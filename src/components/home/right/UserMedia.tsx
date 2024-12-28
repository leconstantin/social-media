import Image from "next/image";
import Link from "next/link";

export default function UserMedia({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/4 h-24">
          <Image
            src="/thumbnail/meala.jpg"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/thumbnail/meala.jpg"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/thumbnail/meala.jpg"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/thumbnail/meala.jpg"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/thumbnail/meala.jpg"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/4 h-24">
          <Image
            src="/thumbnail/meala.jpg"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
