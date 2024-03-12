"use client";
import Table from "@/components/Common/Table";
import storageArray from "@/examples/storage/storages";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
export default function StorageList() {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    {
      header: "Encargado",
      accessorKey: "encargado",
    },
    {
      header: "Ocupado",
      accessorKey: "ocupado",
    },
    {
      header: "",
      accessorKey: "actions",
      cell: () => (
        <button
          type="button"
          className="mr-5 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col items-center p-5">
      <div className="flex w-1/2 flex-col items-center justify-between gap-x-6 gap-y-6 px-8 sm:flex-row">
        <span className="text-lg font-semibold text-[#212B36]">
          Lista de Galpones
        </span>
      </div>
      <div className="xs:max-w-xl mt-1 w-1/2 max-w-xl overflow-x-scroll scrollbar-thin scrollbar-track-[#EDEDED] scrollbar-thumb-[#7851BD] sm:max-w-xl md:max-w-7xl md:overflow-auto 2xl:max-w-none">
        <Table columns={columns} data={storageArray} />
      </div>
    </div>
  );
}
