import CarrierDetailView from "./components/CarrierDetailView";
import CarriersList from "./components/CarriersList";
import StatsHeader from "./components/StatsHeader";

export default function Carriers({
  searchParams,
  openSideBar,
}: {
  searchParams?: {
    id: string;
    page?: string;
  };
  openSideBar?: boolean;
}) {
  return (
    <>
      <StatsHeader />
      <div
        className={`flex w-full gap-7 px-7 py-7 transition-all duration-1000 ease-in-out ${
          openSideBar
            ? "sm:max-w-[calc(100vw_-_229px)] lg:max-w-[calc(100vw_-_286px)] "
            : "sm:max-w-[calc(100vw_-_99px)] lg:max-w-[calc(100vw_-_110px)] xl:max-w-[calc(100vw_-_138px)]"
        }`}
      >
        <div
          className={`flex w-full flex-col items-start justify-center gap-x-12 gap-y-4 pt-4 sm:max-w-[calc(100%)] sm:flex-row`}
        >
          <CarriersList />
          {searchParams?.id && (
            <CarrierDetailView carrierId={searchParams?.id} />
          )}
        </div>
      </div>
    </>
  );
}
