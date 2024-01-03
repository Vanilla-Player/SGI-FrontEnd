import React, { useEffect, useRef } from "react";
import { createChart, ColorType } from "lightweight-charts";

interface DynamicGraph {
  data: Array<any>;
}

// Create a new component that uses useRef and useEffect
const DynamicGraph: React.FC<DynamicGraph> = (props) => {
  const colors = {
    backgroundColor: "white",
    lineColor: "#2962FF",
    textColor: "black",
    areaTopColor: "#2962FF",
    areaBottomColor: "rgba(41, 98, 255, 0.28)",
  };

  const chartContainerRef: any = useRef();

  const { data } = props;

  useEffect(() => {
    const data2: any = [
      { time: "2018-12-22", value: 27.02 },
      { time: "2018-12-23", value: 31.11 },
      { time: "2018-12-24", value: 28.89 },
      { time: "2018-12-25", value: 27.32 },
      { time: "2018-12-26", value: 25.17 },
      { time: "2018-12-27", value: 23.92 },
      { time: "2018-12-28", value: 22.68 },
      { time: "2018-12-29", value: 25.46 },
      { time: "2018-12-30", value: 32.51 },
      { time: "2018-12-31", value: 32.67 },
    ];

    const handleResize = () => {
      chart.applyOptions({ width: 250 });
      //chart.applyOptions({ width: chartContainerRef.current.clientWidth }); -> Me agranda mucho la grafica y me la saca de posicion
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: colors.backgroundColor },
        textColor: colors.textColor,
      },
      width: 250,
      height: 200,
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor: colors.lineColor,
      topColor: colors.areaTopColor,
      bottomColor: colors.areaBottomColor,
    });
    newSeries.setData(data);

    const newSeries2 = chart.addAreaSeries({
      // lineColor: colors.lineColor,
      // topColor: colors.areaTopColor,
      // bottomColor: colors.areaBottomColor,
      lineStyle: 1,
    });
    newSeries2.setData(data2);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [
    data,
    colors.backgroundColor,
    colors.lineColor,
    colors.textColor,
    colors.areaTopColor,
    colors.areaBottomColor,
  ]);

  return (
    <div ref={chartContainerRef} className="p-5">
      <div className="absolute z-10 text-black">
        <p> ProdcutoX</p>
      </div>
    </div>
  );
};

export default DynamicGraph;
