"use client";

import Table from "@/components/Common/Table";
import { TABLE_DATA } from "@/utils/constants/tableData";
import Image from "next/image";
export default function ActivityList() {
  const columns = [
    {
      header: "Ultimos ingresos (gastos o pedidos)",
      accessorKey: "title",
      cell: ({ row }: any) => (
        <div className="relative flex w-full items-center justify-center">
          <div className="flex w-[200px] items-center justify-between gap-3">
            <Image
              src={row?.original.image}
              alt="hepta-brown"
              width={42}
              height={42}
              className="min-h-[42px] min-w-[42px] rounded"
            />
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-xs text-[#212B36] md:text-sm">
                {row?.original.title}
              </span>
              <span className="mt-1 text-xs text-[#637381] md:text-sm">
                {row?.original.description}
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Transportista",
      accessorKey: "account",
    },
    {
      header: "Fecha de salida",
      accessorKey: "dateFrom",
    },
    {
      header: "Fecha de llegada",
      accessorKey: "dateTo",
    },
    {
      header: "Monto total",
      accessorKey: "balance",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold text-[#212B36]">
          Ultimos ingresos
        </span>
        <div className="xs:max-w-xl mt-1 w-full max-w-xl overflow-x-scroll scrollbar-thin scrollbar-track-[#EDEDED] scrollbar-thumb-[#7851BD] sm:max-w-xl md:max-w-7xl md:overflow-auto 2xl:max-w-none">
          <Table columns={columns} data={TABLE_DATA} />
        </div>
      </div>
    </div>
  );
}
