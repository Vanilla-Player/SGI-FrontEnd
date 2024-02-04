import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import ProductAddModalForm from "./ProductAddModalForm";
import ProductList from "./ProductList";
const OrderForm: React.FC = () => {
  const [addProductModal, setAddProductModal] = useState(false);
  const toggleModal = () => {
    setAddProductModal(!addProductModal);
  };

  return (
    <div className="flex w-full justify-center">
      <form className="flex w-full max-w-5xl flex-col p-5">
        <div className=" flex flex-col items-center justify-between md:flex-row">
          <label className="m-2 w-full max-w-md rounded-xl border-2 border-gray-300 bg-white p-2 text-center">
            Proveedor
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              name="proveedor"
            ></input>
          </label>
          <label className="m-2 w-full max-w-md rounded-xl border-2 border-gray-300 bg-white p-2 text-center">
            Transportista
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              name="Transportista"
            ></input>
          </label>
        </div>
        <div className="self-center">
          <button
            type="button"
            className="inline-flex gap-x-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={toggleModal}
          >
            Agregar Producto{" "}
            <PlusCircleIcon className="h-5 w-5 text-green-600" />
          </button>
        </div>
        <ProductList />
        <ProductAddModalForm toggleModal={toggleModal} open={addProductModal} />
        <div className="self-center md:self-end">
          <button
            type="submit"
            className="my-5 rounded-md bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
