"use client";

import { EyeIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import CarrierListSelect from "./CarrierListSelect";
import CarrierCreateModalForm from "./CreateModalForm";
import { useState } from "react";
import Table from "@/components/Common/Table";
import { CARRIERS_TABLE_DATA } from "@/utils/constants/tableData";
import Image from "next/image";

export default function CarriersList() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const toggleModal = () => {
    setOpenCreateModal(!openCreateModal);
  };

  // Define the columns for the table
  const columns = [
    {
      header: "Transportista",
      id: "carrier",
      accessorKey: "carrier",
      cell: ({ row }: any) => {
        console.log(row);

        return (
          <div className="flex items-center gap-3">
            <div className="">
              <Image
                src={row.original.carrier.imageUrl}
                alt="hepta-brown"
                className="min-h-[32px] min-w-[32px] rounded-full"
                height={32}
                width={32}
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-xs text-[#212B36] md:text-sm">
                {row.original.carrier.name}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      header: "Ultima fecha de salida",
      id: "lastDateFrom",
      accessorKey: "lastDateFrom",
    },
    {
      header: "Tiempo estimado de llegada",
      id: "estimateTime",
      accessorKey: "estimateTime",
    },
    {
      header: "Tiempo de entrega real",
      id: "duration",
      accessorKey: "duration",
    },
    {
      header: "Estado de entrega",
      id: "status",
      accessorKey: "status",
    },
    {
      header: "Precio",
      id: "price",
      accessorKey: "price",
    },
    {
      header: "Puntaje promedio",
      id: "averageRating",
      accessorKey: "averageRating",
    },
    {
      header: "Tiene resena",
      id: "hasReview",
      accessorKey: "hasReview",
      cell: ({ row }: any) => (row.original.hasReview ? "Si" : "No"), // Use Cell to handle custom rendering
    },
    {
      header: "Acciones",
      id: "actions",
      accessorKey: "id",
      cell: ({ row }: any) => (
        <button
          type="button"
          className="mx-4 rounded bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          onClick={() => handleCarrierViewClick(row.original.id)}
        >
          <EyeIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      ),
    },
  ];

  // Define some data
  const data = [
    {
      carrier: {
        name: "Carrier 1",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      lastDateFrom: "2022-01-01",
      estimateTime: "2 days",
      duration: "1 day",
      status: "Delivered",
      price: "$100",
      averageRating: "4.5",
      hasReview: true,
      id: "1",
    },
  ];

  const handleCarrierViewClick = (id: number) => {
    const prevParams = searchParams.get("id");
    const params = new URLSearchParams(searchParams);
    if (id.toString() !== prevParams) {
      params.set("id", id);
    } else {
      return;
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center justify-between gap-x-6 gap-y-6 px-8 sm:flex-row">
          <CarrierListSelect />
          <span className="text-lg font-semibold text-[#212B36]">
            Ultimos pedidos ingresados
          </span>
          <button
            type="button"
            className="inline-flex gap-x-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={toggleModal}
          >
            Crear nuevo transportista <PlusCircleIcon className="h-5 w-5" />
          </button>
        </div>
        <Table data={data} columns={columns} />
      </div>
      <CarrierCreateModalForm
        toggleModal={toggleModal}
        open={openCreateModal}
      />
    </div>
  );
}
