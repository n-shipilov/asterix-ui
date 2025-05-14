import React from "react";
import { Checkbox } from "../../Checkbox";
import { useTableContext } from "../TableContext";
import { table } from "../Table";
import { Sort } from "./Sort";
import { useTableSelection } from "../hooks";

export const TableHead: React.FC = () => {
  const { columns, rowSelection } = useTableContext();
  const { isAllRowChecked, isIndeterminate, handleAllRowSelect } = useTableSelection();

  return (
    <thead className={table("head")}>
      <tr className={table("row")}>
        {rowSelection && (
          <th className={table("cell", { checkbox: true })}>
            <Checkbox
              className={table("checkbox")}
              indeterminate={isIndeterminate}
              checked={isAllRowChecked}
              onChange={() => handleAllRowSelect()}
            />
          </th>
        )}
        {columns?.map((column, index) => {
          const { align, sorter, title } = column;
          return (
            <th className={table("cell", { align })} key={index}>
              {sorter ? <Sort column={column} /> : title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
