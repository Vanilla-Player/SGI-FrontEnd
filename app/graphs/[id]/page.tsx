"use client";
import DynamicGraph from "@/components/DynamicGrapgh";

const Page = ({ params }: { params: { id: string } }) => {
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
  const { id } = params;
  return (
    <div className="h-[500px]">
      <DynamicGraph data={data} />
      <div>
        <p>Promedio</p>
        <p>Total</p>
        <p>Diferencia</p>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Page;
