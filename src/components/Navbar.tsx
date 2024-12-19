import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-24">
      {/* left */}
      <div className="">
        <Link href="/" className="font-bold text-xl text-blue-600">
          LESOCIAL
        </Link>
      </div>
      {/* center */}
      <div className="hidden">
        {/* Links */}
        <div>
          <Link href="/">
            <Image src="/home.png" alt="home icon" width={16} height={16} />
            <span>Home</span>
          </Link>
        </div>
      </div>
      {/* right */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
}
