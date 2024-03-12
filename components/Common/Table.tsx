import { Fragment, useEffect, useState } from "react";

import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";

import type { ColumnDef, Row, PaginationState } from "@tanstack/react-table";

import { classNames } from "@/utils/support/style";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  className?: string;
}

function Table<T extends object>({
  data,
  columns,
  renderSubComponent,
  pageIndex,
  pageSize,
  pageCount,
  onPaginationChange,
  className,
}: ReactTableProps<T>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndex ?? 0,
    pageSize: pageSize ?? 15,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange(pagination);
    }
  }, [pagination, onPaginationChange]);

  return (
    <div className="z-10 flex w-full flex-col">
      <div className="w-full overflow-x-auto">
        <div className="flex w-full flex-col py-1">
          <div className="mt-1 w-full overflow-x-scroll scrollbar-thin scrollbar-track-[#EDEDED] scrollbar-thumb-[#7851BD] sm:max-w-xl md:max-w-7xl md:overflow-auto 2xl:max-w-none">
            <table className={classNames(`primary-table`, className)}>
              <thead className="w-full rounded-lg bg-[#222E3A]/[6%] text-base font-semibold text-white">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="primary-table-th">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <Fragment key={row.id}>
                    <tr
                      className={classNames({
                        "dark:bg-black-300 bg-gray-50 transition-colors":
                          row.getIsExpanded(),
                      })}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>

                    {renderSubComponent ? (
                      <tr key={row.id + "-expanded"}>
                        <td colSpan={columns.length}>
                          {renderSubComponent({ row })}
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* <Pagination table={table} /> */}
        </div>
      </div>
    </div>
  );
}

// function Pagination<T>({
//   table,
// }: React.PropsWithChildren<{
//   table: ReactTable<T>;
// }>) {
//   return (
//     <div className="flex items-center gap-2">
//       <button
//         onClick={() => table.setPageIndex(0)}
//         disabled={!table.getCanPreviousPage()}
//       >
//         <ChevronDoubleLeftIcon className={"h-5"} />
//       </button>

//       <button
//         onClick={() => table.previousPage()}
//         disabled={!table.getCanPreviousPage()}
//       >
//         <ChevronLeftIcon className={"h-5"} />
//       </button>

//       <button
//         onClick={() => table.nextPage()}
//         disabled={!table.getCanNextPage()}
//       >
//         <ChevronRightIcon className={"h-5"} />
//       </button>

//       <button
//         onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//         disabled={!table.getCanNextPage()}
//       >
//         <ChevronDoubleRightIcon className={"h-5"} />
//       </button>

//       <span className="flex items-center gap-1 text-sm">
//         <div>Page</div>

//         <strong>
//           {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
//         </strong>
//       </span>
//     </div>
//   );
// }

export default Table;
