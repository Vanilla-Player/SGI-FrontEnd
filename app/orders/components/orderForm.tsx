import React, { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import ProductAddModalForm from "./ProductAddModalForm";
const OrderForm: React.FC = () => {
  const [addProductModal, setAddProductModal] = useState(false);
  const toggleModal = () => {
    setAddProductModal(!addProductModal);
  };

  return (
    <div className="flex w-full justify-center">
      <form className="flex w-full max-w-5xl flex-col p-5">
        <div className=" flex flex-row justify-between">
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
        <div>
          <table className="font-inter w-full table-auto border-separate border-spacing-y-1.5 overflow-scroll text-left md:overflow-auto">
            <thead className="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
              <tr className="">
                <th className=" whitespace-nowrap rounded-l-lg py-3 pl-3 text-center text-base font-normal text-[#212B36] sm:text-sm">
                  Id Producto
                </th>
                <th className="whitespace-nowrap rounded-l-lg py-3 pl-3 text-center text-base font-normal text-[#212B36] sm:text-sm">
                  Producto
                </th>
                <th className=" whitespace-nowrap py-3 pl-2 text-center text-base font-normal text-[#212B36] sm:text-sm">
                  Descripcion
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-center text-base font-normal text-[#212B36] sm:text-sm">
                  Cantidad
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                  A001
                </td>
                <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                  Agua
                </td>
                <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                  Agua del himalaya
                </td>
                <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                  10
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ProductAddModalForm toggleModal={toggleModal} open={addProductModal} />
        <div className="self-end">
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
