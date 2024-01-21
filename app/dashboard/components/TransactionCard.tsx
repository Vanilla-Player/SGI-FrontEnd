import TransactionModal from "./TransactionModal";

export default function TransactionCard({
  openSideBar,
}: {
  openSideBar: boolean;
}) {
  return (
    <div
      className={`w-full max-w-[230px] flex-col gap-7 ${
        openSideBar ? " lg:max-w-[336px]" : "lg:max-w-[400px]"
      } xl:max-w-[390px] ${openSideBar ? "hidden lg:flex" : "hidden sm:flex"}`}
    >
      <div className="rounded-2xl bg-[#FDFDFF]">
        <TransactionModal />
      </div>
    </div>
  );
}
