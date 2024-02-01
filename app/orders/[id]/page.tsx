"use client";
import OrderForm from "@/app/orders/components/orderForm";

const Page = ({}: { params: { id: string } }) => {
  return (
    <div>
      <OrderForm />
    </div>
  );
};

export default Page;
