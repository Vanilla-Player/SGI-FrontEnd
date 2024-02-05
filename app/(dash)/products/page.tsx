import HeaderGraphContainer from "./components/HeaderGraphContainer";
import ProductList from "./components/ProductList";

export default function ProductPage({ openSideBar }: { openSideBar: boolean }) {
  return (
    <div
      className={`flex w-full gap-7 px-7 py-7 transition-all duration-1000 ease-in-out ${
        openSideBar
          ? "sm:max-w-[calc(100vw_-_229px)] lg:max-w-[calc(100vw_-_286px)]"
          : "sm:max-w-[calc(100vw_-_99px)] lg:max-w-[calc(100vw_-_110px)] xl:max-w-[calc(100vw_-_138px)]"
      }`}
    >
      <div
        className={`flex w-full flex-col items-center justify-center gap-x-12 sm:max-w-[calc(100%)]`}
      >
        <HeaderGraphContainer>
          <div>Product graph section</div>
        </HeaderGraphContainer>

        <ProductList />
      </div>
    </div>
  );
}
