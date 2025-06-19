import React from "react";
import { useTableContext } from "../TableContext";
import { table } from "../Table";
import { SortIndicator } from "./SortIndicator";

export const TableHead: React.FC = () => {
  const { columns, sorting, handleChangeSorting } = useTableContext();

  return (
    <thead className={table("head")}>
      <tr className={table("row")}>
        {columns?.map((column, index) => {
          const { align, title, sorter, key } = column;
          return (
            <th className={table("cell", { align })} key={index}>
              {sorter ? (
                <div
                  className={table("sort", {
                    active: key === sorting.key,
                  })}
                  onClick={() => handleChangeSorting(key)}
                >
                  {title}
                  <SortIndicator columnKey={key} />
                </div>
              ) : (
                title
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
