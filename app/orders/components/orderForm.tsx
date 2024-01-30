import React from "react";
import ProductManager from "./ProductsForm";
const OrderForm: React.FC = () => {
  return (
    <div>
      <form>
        <label>
          Proveedor
          <input type="text" name="proveedor"></input>
        </label>
        <label>
          Transportista
          <input type="text" name="Transportista"></input>
        </label>
        <ProductManager />
      </form>
    </div>
  );
};

export default OrderForm;
