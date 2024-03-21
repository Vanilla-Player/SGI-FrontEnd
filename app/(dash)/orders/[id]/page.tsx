"use client";

import OrderForm from "../components/orderForm";

const Page = ({}: { params: { id: string } }) => {
  return (
    <div>
      <OrderForm />
    </div>
  );
};

export default Page;
