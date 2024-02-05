"use client";

import ProductList from "../components/ProductsList";
import ProdcutFiltrer from "../components/ProductFiltrer";

const Page = ({}: { params: { id: string } }) => {
  return (
    <div className="flex flex-col p-5">
      <ProdcutFiltrer />
      <ProductList />
    </div>
  );
};

export default Page;
