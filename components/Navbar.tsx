import {
  Bars3Icon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function Navbar({
  toggleSideBar,
}: {
  toggleSideBar: () => void;
}) {
  return (
    <div className="flex w-full items-center justify-between bg-white px-4 py-5 sm:justify-end sm:gap-11 sm:px-7">
      <div
        className="group flex cursor-pointer items-center justify-center rounded-md border border-[#E7E7E7] hover:border-blue-600 sm:hidden"
        onClick={toggleSideBar}
      >
        <Bars3Icon className="h-8 w-8 text-[#637381] group-hover:text-blue-600" />
      </div>
      <div className="flex items-center gap-2 sm:hidden">
        <Logo />
        <span className="font-inter cursor-pointer text-sm font-semibold text-[#233047]">
          Sistema de gestion
        </span>
      </div>
      {/* Search bar */}
      <div className="group hidden w-2/4 max-w-sm items-center gap-2 rounded-[30px] border-[2px] border-transparent bg-[#EDEDED] px-5 py-3 focus-within:border-[#7851BD] sm:flex sm:max-w-2xl">
        <MagnifyingGlassIcon className="h-5 w-5" />
        <input
          type="text"
          className="group w-full bg-transparent outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="flex items-center gap-x-4 gap-y-1.5">
        {/* TODO: hacer funfcionar */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#EDEDED]">
            <Image
              alt="user picture"
              src="/assets/admin/default-user.png"
              width={32}
              height={32}
            />
          </div>
          <span className="font-inter text-sm font-semibold text-[#637381]">
            Admin
          </span>
        </div>
      </div>
    </div>
  );
}
