import Link from "next/link";
import NavLinks from "@/components/ui/dashboard/nav-links";
import Image from "next/image";
import logo from "../../../public/detoxitube-logo.png";
// import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from "@heroicons/react/24/outline";
import { LogoutButton } from "@/components/auth/logout-button";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-start rounded-md p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40 flex items-center">
          <Image src={logo} alt="DetoxiTube Logo" width={50} height={50} />
          <span className="text-xl font-bold text-white">DetoxiTube</span>
        </div>
      </Link>
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <form className="h-full flex flex-col-reverse">
          <LogoutButton />
        </form> */}
      </div>
    </div>
  );
}
