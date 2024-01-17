import { classNames } from "@/libs/utils";
import { Fragment } from "react";

export default function ActivityList({ activityList }: any) {
  return (
    <div>
      <div className="mx-auto max-w-full">
        <h2 className="mx-auto max-w-full text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
          Pedidos recientes
        </h2>
      </div>
      <div className="mt-6 overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Monto</th>
                  <th className="hidden sm:table-cell">Cliente</th>
                  <th>Mostrar mas...</th>
                </tr>
              </thead>
              <tbody>
                {activityList.map((item: any) => (
                  <Fragment key={item.dateTime}>
                    <tr className="text-sm leading-6 text-gray-900">
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="relative isolate py-2 font-semibold"
                      >
                        <time dateTime={item.dateTime}>{item.date}</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-200" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-200" />
                      </th>
                    </tr>
                    {item.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            <transaction.icon
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                              aria-hidden="true"
                            />
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <div className="text-sm font-medium leading-6 text-gray-900">
                                  {transaction.amount}
                                </div>
                                <div
                                  className={classNames(
                                    "rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-400"
                                  )}
                                >
                                  {transaction.status}
                                </div>
                              </div>
                              {transaction.tax ? (
                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                  {transaction.tax} impuesto
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="text-sm leading-6 text-gray-900">
                            {transaction.client}
                          </div>
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            {transaction.description}
                          </div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="flex justify-end">
                            <a
                              href={transaction.href}
                              className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                              Mostar
                              <span className="hidden sm:inline">
                                {" "}
                                detalles
                              </span>
                              <span className="sr-only">
                                , Pedido #{transaction.invoiceNumber},{" "}
                                {transaction.client}
                              </span>
                            </a>
                          </div>
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            Pedido{" "}
                            <span className="text-gray-900">
                              #{transaction.invoiceNumber}
                            </span>
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
