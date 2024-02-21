import React from "react";
import ProductList from "./components/ProductList";
import StatsHeader from "./components/StatsHeader";

const Graphs: React.FC = () => {
  return (
    <div className="flex flex-col">
      <StatsHeader />
      <ProductList />
    </div>
  );
};

export default Graphs;
