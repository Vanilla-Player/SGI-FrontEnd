"use client";
import Table from "@/components/Common/Table";
import productsArray from "@/examples/orders/products";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";

export default function ProductList() {
  const router = useRouter();

  const columns = [
    {
      header: "Id Producto",
      accessorKey: "idProducto",
    },
    {
      header: "Producto",
      accessorKey: "nombreProducto",
    },
    {
      header: "Descripcion",
      accessorKey: "descripcion",
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: () => (
        <button
          type="button"
          className="mr-5 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          onClick={() => {
            router.push("graphs/1");
          }}
        >
          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      ),
    },
  ];

  return (
    <div className="flex w-full gap-7 px-7 py-7 transition-all duration-1000 ease-in-out sm:max-w-[calc(100vw_-_99px)] lg:max-w-[calc(100vw_-_110px)] xl:max-w-[calc(100vw_-_138px)]">
      <Table columns={columns} data={productsArray} />
    </div>
  );
}
