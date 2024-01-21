import DropDown from "@/components/Dropdown";
import { PAY_METHODS, PEOPLE, USER_LIST } from "@/utils/constants/userList";

export default function TransactionModal() {
  return (
    <div className="flex flex-col gap-5 py-6 ">
      <div className="flex flex-col gap-3 px-5">
        <div className="flex justify-between gap-3 md:flex-col lg:flex-row lg:justify-between">
          <span className="whitespace-nowrap text-lg font-semibold text-[#212B36]">
            Send Money
          </span>
          <button className="w-fi h-fit self-end whitespace-nowrap rounded-[40px] bg-[#EDEDED] px-5 py-1.5 text-center text-base tracking-[1.6px] text-[#637381] hover:bg-gradient-to-tl hover:from-[#4E4BCF] hover:to-[#7851BD] hover:text-white">
            View All
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-2 lg:flex-nowrap lg:gap-0 ">
          <div className="flex flex-wrap gap-7">
            {USER_LIST?.map((data, index) => (
              <img
                src={data}
                alt="user"
                key={index}
                className="h-9 w-9 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 border-t border-[#7851bd33] px-5 pt-5">
        <div className="flex w-full flex-col gap-2 xl:flex-row xl:justify-between">
          <span className="text-lg font-semibold tracking-[1px] text-[#212B36]">
            Operations
          </span>
          <div className="flex flex-wrap rounded-lg bg-[#EDEDED] p-2">
            <span className="cursor-pointer rounded-md bg-[#EDEDED] px-2.5 py-1.5 text-sm tracking-[1.5px] hover:bg-white hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
              Buy
            </span>
            <span className="cursor-pointer rounded-md bg-[#EDEDED] px-2.5 py-1.5 text-sm tracking-[1.5px] hover:bg-white hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
              Sell
            </span>
            <span className="cursor-pointer rounded-md bg-[#EDEDED] px-2.5 py-1.5 text-sm tracking-[1.5px] hover:bg-white hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
              Exchange
            </span>
          </div>
        </div>
        <div className="">
          <div className="">
            <span className="text-sm text-[#637381]">You pay</span>
            <div className="flex flex-wrap justify-between gap-3 rounded-lg bg-[#EDEDED] py-2 pl-1.5">
              <DropDown
                list={PAY_METHODS}
                selectedIcon={PAY_METHODS[1]}
                type="crypto"
                style="flex p-1.5 bg-[#FDFDFF] gap-2 items-center w-fit rounded-lg tracking-[1.4px] uppercase w-[95px]"
              />
              <div className="ml-1.5 mr-4 flex items-center gap-4">
                <span className="text-sm font-semibold tracking-[1.5px] text-[#212B36]">
                  $321.40
                </span>
                <button className="rounded-[20px] bg-[#7851BD] px-2 py-0.5 text-xs font-bold uppercase tracking-[1px] text-[#FDFDFF]">
                  Max
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <path
                d="M8.32195 15.7694L11.7481 12.5688C11.828 12.4942 11.8913 12.4057 11.9345 12.3082C11.9778 12.2107 12 12.1062 12 12.0007C12 11.7876 11.9094 11.5833 11.7481 11.4326C11.5868 11.282 11.3681 11.1973 11.14 11.1973C10.9119 11.1973 10.6931 11.282 10.5318 11.4326L8.57034 13.273L8.57034 3.99927C8.57034 3.78706 8.4801 3.58354 8.31947 3.43349C8.15884 3.28343 7.94097 3.19913 7.71381 3.19913C7.48664 3.19913 7.26877 3.28343 7.10814 3.43349C6.94751 3.58354 6.85727 3.78706 6.85727 3.99927L6.85727 15.2013C6.85811 15.3593 6.90899 15.5135 7.0035 15.6445C7.098 15.7755 7.2319 15.8774 7.38832 15.9374C7.54431 15.9987 7.71622 16.0155 7.88238 15.9856C8.04854 15.9556 8.2015 15.8804 8.32195 15.7694ZM5.14419 12.0007L5.14419 0.798694C5.14335 0.640725 5.09247 0.486524 4.99796 0.355524C4.90346 0.224524 4.76956 0.122587 4.61314 0.0625601C4.45715 0.00128542 4.28524 -0.0154558 4.11908 0.014449C3.95292 0.0443537 3.79996 0.119564 3.67951 0.230591L0.253364 3.43117C0.173082 3.50556 0.109359 3.59405 0.0658735 3.69156C0.0223882 3.78906 3.81443e-07 3.89365 3.76826e-07 3.99927C3.72209e-07 4.1049 0.0223881 4.20949 0.0658734 4.30699C0.109359 4.4045 0.173082 4.49299 0.253364 4.56738C0.33299 4.64237 0.427723 4.7019 0.5321 4.74252C0.636477 4.78314 0.748431 4.80406 0.861505 4.80406C0.974578 4.80406 1.08653 4.78314 1.19091 4.74252C1.29529 4.7019 1.39002 4.64237 1.46965 4.56738L3.43112 2.72704L3.43112 12.0007C3.43112 12.2129 3.52136 12.4165 3.68199 12.5665C3.84262 12.7166 4.06049 12.8009 4.28766 12.8009C4.51482 12.8009 4.73269 12.7166 4.89332 12.5665C5.05395 12.4165 5.14419 12.2129 5.14419 12.0007Z"
                fill="#212B36"
              />
            </svg>
          </div>
          <div className="mt-0.5">
            <span className="text-sm text-[#637381]">You get</span>
            <div className="flex flex-wrap justify-between gap-3 rounded-lg bg-[#EDEDED] py-2 pl-1.5">
              <DropDown
                list={PAY_METHODS}
                type="crypto"
                selectedIcon={PAY_METHODS[0]}
                style={
                  "flex p-1.5 bg-[#FDFDFF] gap-2 items-center w-fit rounded-lg tracking-[1.4px] uppercase w-[95px]"
                }
              />
              <div className="ml-1.5 mr-4 flex items-center gap-4">
                <span className="text-sm font-semibold tracking-[1.5px] text-[#212B36]">
                  0.05BTC
                </span>
                <button className="rounded-[20px] bg-[#7851BD] px-2 py-0.5 text-xs font-bold uppercase tracking-[1px] text-[#FDFDFF]">
                  min
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-3 rounded-xl bg-gradient-to-tl from-[#4E4BCF] to-[#7851BD] px-5 py-5 text-lg font-semibold text-white hover:scale-105">
          Buy money
        </button>
      </div>
    </div>
  );
}
