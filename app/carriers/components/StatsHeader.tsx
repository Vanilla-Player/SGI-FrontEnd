import { classNames } from "@/utils/support/style";

export default function StatsHeader() {
  const stats = [
    { name: "Cantidad de transportistas disponibles   ", value: "405" },
    {
      name: "Tiempo promedio de entrega de pedidos",
      value: "3.65",
      unit: "horas",
    },
    { name: "Cantidad de transportistas en camino", value: "3" },
    { name: "Probabilidad de fallo en entrega", value: "0.05%" },
  ];
  return (
    <div className="relative flex flex-col gap-4 overflow-hidden bg-gradient-to-tl from-[#4E4BCF] to-[#7851BD] sm:flex-wrap sm:gap-12 lg:h-fit xl:flex-row xl:items-end xl:justify-between xl:gap-6">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 sm:flex-wrap lg:grid-cols-4">
        {stats.map((stat, statIdx) => (
          <div
            key={stat.name}
            className={classNames(
              statIdx % 2 === 1
                ? "sm:border-l"
                : statIdx === 2
                  ? "lg:border-l"
                  : "",
              "border-t border-white px-4 py-6 sm:px-6 lg:px-8"
            )}
          >
            <p className="text-sm font-medium leading-6 text-gray-200">
              {stat.name}
            </p>
            <p className="mt-2 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-white">
                {stat.value}
              </span>
              {stat.unit ? (
                <span className="text-sm text-gray-200">{stat.unit}</span>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
