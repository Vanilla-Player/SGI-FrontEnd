"use client";
import productsArray from "@/examples/orders/products";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";

export default function ProductList() {
  const router = useRouter();
  return (
    <div className="flex w-full gap-7 px-7 py-7 transition-all duration-1000 ease-in-out sm:max-w-[calc(100vw_-_99px)] lg:max-w-[calc(100vw_-_110px)] xl:max-w-[calc(100vw_-_138px)]">
      <table className="font-inter w-full table-auto border-separate border-spacing-y-1.5 overflow-scroll text-left md:overflow-auto">
        <thead className="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
          <tr className="">
            <th className=" whitespace-nowrap rounded-l-lg py-3 pl-3 text-center text-base font-normal text-[#212B36] sm:text-sm">
              Id Producto
            </th>
            <th className="whitespace-nowrap py-3 pl-3 text-center text-base font-normal text-[#212B36] sm:text-sm">
              Producto
            </th>
            <th className=" whitespace-nowrap py-3 pl-2 text-center text-base font-normal text-[#212B36] sm:text-sm">
              Descripcion
            </th>
            <th className=" whitespace-nowrap rounded-r-lg py-3 pl-2 text-base font-normal text-[#212B36]  sm:text-sm">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {productsArray.map((product, index) => (
            <tr key={index}>
              <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                {product?.idProducto}
              </td>
              <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                {product?.nombreProducto}
              </td>
              <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                {product?.descripcion}
              </td>
              <td>
                <button
                  type="button"
                  className="mr-5 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  onClick={() => {
                    router.push("graphs/1");
                  }}
                >
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
