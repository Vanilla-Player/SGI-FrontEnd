import React from "react";
import Link from "next/link";

interface Order {
  id: number;
  state: string;
}

const Order: React.FC<Order> = (props) => {
  const { id, state } = props;
  let textColor = "";
  switch (state) {
    case "cancelled":
      textColor = "text-red-500";
      break;
    case "completed":
      textColor = "text-green-500";
      break;
    case "ongoing":
      textColor = "text-yellow-500";
      break;
    default:
      textColor = "text-gray-700"; // Default color for other cases
  }

  return (
    <div className={`text-xl ${textColor} flex flex-col p-2 align-middle`}>
      <p className="text-center">Order#{id}</p>
      <p>State {state}</p>
      <Link
        className="m-2 border-2 border-black text-center text-black"
        href={`orders/${id}`}
      >
        See Order
      </Link>
    </div>
  );
};

export default Order;
