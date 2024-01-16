import React from "react";
import Card from "@/components/Card";
const Orders: React.FC = () => {
  const contentType: string = "order";

  const data = [
    { id: 1, state: "completed" },
    { id: 2, state: "cancelled" },
    { id: 3, state: "ongoing" },
  ];

  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((order, index) => (
        <Card
          key={order.id}
          contentType={contentType}
          dataToRender={data[index]}
        />
      ))}
    </div>
  );
};

export default Orders;
