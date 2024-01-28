import { NAVIGATION } from "@/utils/constants/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "./Logo";

export default function Sidebar({
  show,
  openSideBar,
  expandSidebar,
  toggleSideBar,
}: {
  show: boolean;
  openSideBar: boolean;
  expandSidebar: () => void;
  toggleSideBar: () => void;
}) {
  return (
    <div
      className={`absolute top-0 z-20 h-max flex-col gap-16 overflow-hidden bg-white py-7 transition-all duration-1000 ease-in-out sm:relative sm:left-0 sm:flex sm:min-h-[851px] sm:ease-in-out lg:px-5 ${
        show ? "left-0 h-screen w-72 overflow-y-auto" : "-left-72 sm:left-0"
      }
    ${openSideBar ? "px-5 sm:w-72" : "px-3.5 sm:w-28"}
  `}
    >
      <div
        className={`relative z-30 mb-5 flex items-center gap-2 sm:mb-0 ${
          openSideBar ? "pl-2 sm:justify-start" : "pl-0 sm:justify-center"
        }`}
      >
        <div className="h-8 w-8 cursor-pointer">
          <Logo />
        </div>
        <span
          className={`font-inter text-md block font-semibold text-[#233047] ${
            openSideBar ? "block" : "sm:hidden "
          } cursor-pointer`}
        >
          Sistema de gestion
        </span>
      </div>

      <Image
        src="/assets/admin/analytics-dashboard/close.svg"
        alt="logo"
        width={28}
        height={28}
        className={`absolute left-52 top-7 h-7 w-7 cursor-pointer sm:hidden ${
          show ? "z-30 block" : "hidden"
        }`}
        onClick={toggleSideBar}
      />
      <div
        className={`absolute -right-3.5 top-[26px] z-20 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white sm:flex ${
          openSideBar ? "rotate-[180deg]" : "rotate-0"
        }`}
        onClick={expandSidebar}
      >
        <ChevronLeftIcon className="h-8 w-8 rotate-[180deg]" />
      </div>
      {/* Left sidebar navigation */}
      <div className="flex flex-col gap-4 sm:gap-40">
        <div className="flex flex-col gap-2">
          {NAVIGATION?.map((data, index) => (
            <a
              className={`group flex items-center justify-start gap-3 truncate rounded-[10px] px-3.5 py-5 text-lg font-medium tracking-[1.5px] text-[#233047] hover:bg-gradient-to-tl hover:from-[#4E4BCF] hover:to-[#7851BD] hover:text-white ${
                openSideBar ? "sm:justify-start" : "sm:justify-center"
              } `}
              key={index}
              href={data?.alt}
            >
              <div className="h-5 w-5">{data?.svg}</div>
              <span
                className={`block ${openSideBar ? "block" : "sm:hidden "} `}
              >
                {data?.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
