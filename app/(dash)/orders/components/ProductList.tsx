import productsArray from "@/examples/orders/products";

export default function ProductList() {
  return (
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
          {productsArray.map((product, index) => (
            <tr key={index}>
              <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                {product?.idProducto}
              </td>
              <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                {product?.nombreProducto}
              </td>
              <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                {product?.descripcion}
              </td>
              <td className="text-md border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-center  font-normal text-[#637381]">
                {product?.cantidad}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
