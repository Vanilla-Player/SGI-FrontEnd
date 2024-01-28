"use client";

import { CARRIERS_TABLE_DATA } from "@/utils/constants/tableData";
import { EyeIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import CarrierListSelect from "./CarrierListSelect";
import CarrierCreateModalForm from "./CreateModalForm";
import { useState } from "react";

export default function CarriersList() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const toggleModal = () => {
    setOpenCreateModal(!openCreateModal);
  };

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
    <div className="min-w-3/4 overflow-hidden pt-6">
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full items-center justify-between gap-x-6 px-8">
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

        <div className="xs:max-w-xl mt-1 w-full max-w-xl overflow-x-scroll scrollbar-thin scrollbar-track-[#EDEDED] scrollbar-thumb-[#7851BD] sm:max-w-xl md:max-w-7xl md:overflow-auto 2xl:max-w-none">
          <table className="font-inter w-full table-auto border-separate border-spacing-y-1.5 overflow-scroll text-left md:overflow-auto">
            <thead className="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
              <tr className="">
                <th className="whitespace-nowrap rounded-l-lg py-3 pl-3 text-base font-normal text-[#212B36] sm:text-sm">
                  Transportista
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Ultima fecha de salida
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Tiempo estimado de llegada
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Tiempo de entrega real
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Estado de entrega
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Precio
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Puntaje promedio
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Tiene resena
                </th>
                <th className="whitespace-nowrap rounded-r-lg py-3 pl-2 text-base font-normal text-[#212B36]  sm:text-sm">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {CARRIERS_TABLE_DATA.map((data, index) => (
                <tr
                  key={index}
                  className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl"
                >
                  <td className="rounded-l-lg border-y border-l border-[#7851BD]/20 py-5 pl-3 text-sm font-normal text-[#637381]">
                    <div className="relative flex items-center gap-3">
                      <div className="">
                        <Image
                          src={data?.carrier.imageUrl}
                          alt="hepta-brown"
                          className="min-h-[32px] min-w-[32px] rounded-full"
                          height={32}
                          width={32}
                        />
                      </div>
                      <div className="flex flex-col whitespace-nowrap">
                        <span className="text-xs text-[#212B36] md:text-sm">
                          {data?.carrier.name}
                        </span>
                        <span className="mt-1 text-xs text-[#637381] md:text-sm">
                          {data?.description}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal  text-[#637381] md:text-sm">
                    {data.lastDateFrom}
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center text-xs  font-normal text-[#637381] md:text-sm">
                    {data.estimateTime}
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center text-xs  font-normal text-[#637381] md:text-sm">
                    {data.duration}
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal text-[#637381] md:text-sm">
                    {data.status}
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal text-[#637381] md:text-sm">
                    {data.price}
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center text-xs  font-normal text-[#637381] md:text-sm">
                    {data.averageRating}
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center text-xs  font-normal text-[#637381] md:text-sm">
                    {data.hasReview ? "Si" : "No"}
                  </td>
                  <td className="space-x-4 rounded-r-lg border-y border-r border-[#7851BD]/20 px-2 py-5 text-xs font-normal text-[#637381] md:text-sm">
                    <button
                      type="button"
                      className="mx-4 rounded bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                      onClick={() => handleCarrierViewClick(data?.id)}
                    >
                      <EyeIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CarrierCreateModalForm
        toggleModal={toggleModal}
        open={openCreateModal}
      />
    </div>
  );
}
