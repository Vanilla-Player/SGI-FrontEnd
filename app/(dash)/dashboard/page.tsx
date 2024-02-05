import "@fontsource/poppins";
import BalanceCard from "./components/BalanceCard";
import ActivityList from "./components/ActivityList";
import TransactionCard from "./components/TransactionCard";
import TransactionModal from "./components/TransactionModal";

export default function Dashboard({ openSideBar }: { openSideBar: boolean }) {
  return (
    <div
      className={`flex w-full gap-7 px-7 py-7 transition-all duration-1000 ease-in-out ${
        openSideBar
          ? "sm:max-w-[calc(100vw_-_229px)] lg:max-w-[calc(100vw_-_286px)] "
          : "sm:max-w-[calc(100vw_-_99px)] lg:max-w-[calc(100vw_-_110px)] xl:max-w-[calc(100vw_-_138px)]"
      }`}
    >
      <div
        className={`flex w-full flex-col gap-7 ${
          openSideBar
            ? "w-full lg:max-w-[calc(100%_-_320px)]"
            : "md:max-w-[calc(100%_-_255px)] lg:max-w-[calc(100%_-_420px)]"
        } xl:max-w-[calc(100%_-_390px)]`}
      >
        <BalanceCard />
        <ActivityList />
        <div className="block rounded-2xl bg-[#FDFDFF] md:hidden">
          <TransactionModal />
        </div>
      </div>
      <TransactionCard openSideBar={openSideBar} />
    </div>
  );
}
