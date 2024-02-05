import storageArray from "@/examples/storage/storages";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
export default function StorageList() {
  return (
    <div className="flex w-full flex-col items-center p-5">
      <div className="flex w-1/2 flex-col items-center justify-between gap-x-6 gap-y-6 px-8 sm:flex-row">
        <span className="text-lg font-semibold text-[#212B36]">
          Lista de Galpones
        </span>
      </div>
      <div className="xs:max-w-xl mt-1 w-1/2 max-w-xl overflow-x-scroll scrollbar-thin scrollbar-track-[#EDEDED] scrollbar-thumb-[#7851BD] sm:max-w-xl md:max-w-7xl md:overflow-auto 2xl:max-w-none">
        <table className="font-inter w-full table-auto border-separate border-spacing-y-1.5 overflow-scroll text-left md:overflow-auto">
          <thead className="rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
            <tr className="">
              <th className="whitespace-nowrap rounded-l-lg py-3 pl-3 text-base font-normal text-[#212B36] sm:text-sm">
                ID
              </th>
              <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                Nombre
              </th>
              <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                Encargado
              </th>
              <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                Ocupado
              </th>
              <th className="whitespace-nowrap rounded-r-lg py-3 pl-2 text-base font-normal text-[#212B36]  sm:text-sm">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {storageArray.map((storage, index) => (
              <tr
                key={index}
                className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl"
              >
                <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal  text-[#637381] md:text-sm">
                  {storage?.id}
                </td>
                <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal  text-[#637381] md:text-sm">
                  {storage?.nombre}
                </td>
                <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal  text-[#637381] md:text-sm">
                  {storage?.encargado}
                </td>
                <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal  text-[#637381] md:text-sm">
                  {storage?.ocupado}
                </td>
                <td className="space-x-4 rounded-r-lg border-y border-r border-[#7851BD]/20 px-2 py-5 text-center text-xs font-normal text-[#637381] md:text-sm">
                  <button
                    type="button"
                    className="mr-5 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    //onClick={() => handleCarrierViewClick(data?.id)}
                  >
                    <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
