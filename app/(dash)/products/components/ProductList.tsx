import { classNames } from "@/utils/support/style";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export default function ProductList() {
  const brandsWithProducts = [
    {
      name: "Natura",
      products: [
        {
          product_id: 1,
          product_name: "Milk",
          description: "Fresh whole milk",
          category_id: 1,
          brand_id: 1,
          price: 2.5,
          quantity: 100,
          supplier_id: 1,
          created_at: "2024-01-30 08:00:00",
          updated_at: "2024-01-30 08:00:00",
        },
        {
          product_id: 13,
          product_name: "Milk 2",
          description: "Fresh whole milk",
          category_id: 1,
          brand_id: 1,
          price: 2.5,
          quantity: 100,
          supplier_id: 1,
          created_at: "2024-01-30 08:00:00",
          updated_at: "2024-01-30 08:00:00",
        },
      ],
    },
    {
      name: "Bimbo",
      products: [
        {
          product_id: 2,
          product_name: "Bread",
          description: "Whole wheat bread",
          category_id: 2,
          brand_id: 2,
          price: 1.8,
          quantity: 150,
          supplier_id: 2,
          created_at: "2024-01-30 09:00:00",
          updated_at: "2024-01-30 09:00:00",
        },
        {
          product_id: 2,
          product_name: "Integral",
          description: "Whole wheat bread",
          category_id: 2,
          brand_id: 2,
          price: 1.8,
          quantity: 150,
          supplier_id: 2,
          created_at: "2024-01-30 09:00:00",
          updated_at: "2024-01-30 09:00:00",
        },
      ],
    },
    {
      name: "FruitFarms",
      products: [
        {
          product_id: 3,
          product_name: "Apples",
          description: "Red delicious apples",
          category_id: 3,
          brand_id: 3,
          price: 0.75,
          quantity: 200,
          supplier_id: 1,
          created_at: "2024-01-30 10:00:00",
          updated_at: "2024-01-30 10:00:00",
        },
        {
          product_id: 3,
          product_name: "Bananas",
          description: "Bananas from Ecuador",
          category_id: 3,
          brand_id: 3,
          price: 0.75,
          quantity: 200,
          supplier_id: 1,
          created_at: "2024-01-30 10:00:00",
          updated_at: "2024-01-30 10:00:00",
        },
      ],
    },
  ];

  return (
    <div className="container pt-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Lista de productos registrados
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Lista de productos registrados dividos por marca
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Agregar un nuevo producto
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    Producto/Marca
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Descripcion
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Repositor
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Ultima actualizacion de precios
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Editar</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {brandsWithProducts.map((brand) => (
                  <Fragment key={brand.name}>
                    <tr className="border-t border-gray-200">
                      <th
                        colSpan={5}
                        scope="colgroup"
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {brand.name}
                      </th>
                    </tr>
                    {brand.products.map((prod, prodIdx) => (
                      <tr
                        key={prod.product_name}
                        className={classNames(
                          prodIdx === 0 ? "border-gray-300" : "border-gray-200",
                          "border-t"
                        )}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prod.product_name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {prod.description}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {prod.price}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {prod.quantity}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {prod.supplier_id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {prod.updated_at}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                          <div className="flex w-full justify-start gap-x-8">
                            <a
                              href="#"
                              className="inline-flex items-center gap-x-2 text-indigo-600 hover:text-indigo-900"
                            >
                              Editar <PencilIcon className="h-3.5 w-3.5" />
                              <span className="sr-only">
                                , {prod.product_name}
                              </span>
                            </a>
                            <a
                              href="#"
                              className="inline-flex items-center gap-x-2 text-red-600 hover:text-red-900"
                            >
                              Eliminar <TrashIcon className="h-3.5 w-3.5" />
                              <span className="sr-only">
                                , {prod.product_name}
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
