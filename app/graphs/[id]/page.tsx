"use client";
import DynamicGraph from "@/components/DynamicGrapgh";

const Page = ({}: { params: { id: string } }) => {
  const data: Array<any> = [
    { time: "2018-12-22", value: 32.51 },
    { time: "2018-12-23", value: 31.11 },
    { time: "2018-12-24", value: 27.02 },
    { time: "2018-12-25", value: 27.32 },
    { time: "2018-12-26", value: 25.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 25.46 },
    { time: "2018-12-29", value: 23.92 },
    { time: "2018-12-30", value: 22.68 },
    { time: "2018-12-31", value: 22.67 },
  ];
  const stock = 22;
  const prediccion = 32;
  const diferencia = stock - prediccion;

  return (
    <div className="flex h-screen w-screen justify-center p-2">
      <div className="h-2/3 w-3/4 rounded-xl border-2 border-blue-600 bg-white p-5 shadow-2xl shadow-blue-500 ">
        <DynamicGraph data={data} />
        <div className="mt-10 flex justify-between">
          <p className="rounded-xl border-2 border-blue-600 bg-white p-5 text-black shadow-2xl shadow-blue-500">
            Stock: {stock}
          </p>
          <p className="rounded-xl border-2 border-blue-600 bg-white p-5 text-black shadow-2xl shadow-blue-500">
            Prediccion: {prediccion}
          </p>
          {diferencia < 0 ? (
            <p className="rounded-xl border-2 border-blue-600 bg-white p-5 text-red-500 shadow-2xl shadow-blue-500">
              Diferencia: {stock - prediccion}
            </p>
          ) : (
            <p className="rounded-xl border-2 border-blue-600 bg-white p-5 text-green-500 shadow-2xl shadow-blue-500">
              Diferencia: {stock - prediccion}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
