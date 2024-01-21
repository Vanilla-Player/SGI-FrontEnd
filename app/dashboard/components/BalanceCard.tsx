import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

export default function BalanceCard() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-tl from-[#4E4BCF] to-[#7851BD] p-5">
      <div className="flex flex-col gap-4 sm:flex-wrap sm:gap-12 lg:h-fit xl:flex-row xl:items-end xl:justify-between xl:gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-semibold text-[#FDFDFF]">
            Balance General
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-white/80">
              cbu de la org aca
            </span>
            <ClipboardDocumentIcon className="h-5 w-5 text-white" />
          </div>
          <span className="text-[22px] font-bold text-[#FDFDFF]">
            $31,300.40
          </span>
          <span className="text-sm font-medium tracking-[1.4px] text-[#FDFDFF]">
            28.6165489 BTC
          </span>
        </div>

        <div className="ssm:flex-row ssm:self-auto z-10 flex h-full flex-col gap-7 self-start sm:justify-start">
          <div className="flex h-fit flex-col gap-3">
            <div className="flex flex-col pl-1">
              <span className="text-sm font-semibold tracking-[1.5px] text-white/80">
                Ingresos
              </span>
              <span className="text-lg font-semibold text-[#FDFDFF]">
                $459.20
              </span>
            </div>
            <button className="min-w-[150px] rounded-[10px] bg-[#f9f9f94d] py-2.5 text-center text-lg font-semibold text-white hover:scale-105">
              Recibir
            </button>
          </div>
          <div className="flex h-fit flex-col gap-3">
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[1.5px] text-white/80">
                Egresos
              </span>
              <span className="text-lg font-semibold text-[#FDFDFF]">
                $250.40
              </span>
            </div>
            <button className="min-w-[150px] rounded-[10px] bg-[#f9f9f94d] py-2.5 text-center text-lg font-semibold text-white hover:scale-105">
              Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
