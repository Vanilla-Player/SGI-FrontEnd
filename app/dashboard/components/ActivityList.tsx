import { TABLE_DATA } from "@/utils/constants/tableData";
// TODO hacer reutilizable este componente
export default function ActivityList() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold text-[#212B36]">
          Ultimos ingresos
        </span>
        <div className="xs:max-w-xl scrollbar-thin scrollbar-track-[#EDEDED] scrollbar-thumb-[#7851BD] mt-1 w-full max-w-xl overflow-x-scroll sm:max-w-xl md:max-w-7xl md:overflow-auto 2xl:max-w-none">
          <table className="font-inter w-full table-auto border-separate border-spacing-y-1.5 overflow-scroll text-left md:overflow-auto">
            <thead className="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
              <tr className="">
                <th className="whitespace-nowrap rounded-l-lg py-3 pl-3 text-base font-normal text-[#212B36] sm:text-sm">
                  Ultimos ingresos (gastos o pedidos)
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Transportista
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal text-[#212B36] sm:text-sm">
                  Fecha de salida
                </th>
                <th className="f`ont-normal whitespace-nowrap py-3 pl-2 text-base text-[#212B36] sm:text-sm">
                  Fecha de llegada
                </th>
                <th className="whitespace-nowrap rounded-r-lg py-3 pl-2 text-base font-normal text-[#212B36]  sm:text-sm">
                  Monto total
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((data, index) => (
                <tr
                  key={index}
                  className="cursor-pointer bg-[#f6f8fa] drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl"
                >
                  <td className="rounded-l-lg border-y border-l border-[#7851BD]/20 py-5 pl-3 text-sm font-normal text-[#637381]">
                    <div className="relative flex items-center gap-3">
                      <div className="">
                        <img
                          src={data?.image}
                          alt="hepta-brown"
                          className="min-h-[42px] min-w-[42px]"
                        />
                      </div>
                      <div className="flex flex-col whitespace-nowrap">
                        <span className="text-xs text-[#212B36] md:text-sm">
                          {data?.title}
                        </span>
                        <span className="mt-1 text-xs text-[#637381] md:text-sm">
                          {data?.description}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal  text-[#637381] md:text-sm">
                    {data.account}
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal text-[#637381] md:text-sm">
                    {data.dateFrom}
                  </td>
                  <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal text-[#637381] md:text-sm">
                    {data.dateTo}
                  </td>
                  <td
                    className={`rounded-r-lg border-y border-r border-[#7851BD]/20 px-2 py-5 text-xs  font-normal text-[#637381] md:text-sm`}
                  >
                    {data.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
