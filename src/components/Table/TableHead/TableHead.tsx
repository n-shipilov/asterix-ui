import React from "react";
import { Checkbox } from "../../Checkbox";
import { useTableContext } from "../TableContext";
import { table } from "../Table";
import { Sort } from "./Sort";
import { SelectionService } from "../Services";

export const TableHead: React.FC = () => {
  const { columns, rowSelection } = useTableContext();
  const { isAllRowChecked, isIndeterminate, handleAllRowSelect } = SelectionService();

  return (
    <thead className={table("head")}>
      <tr className={table("row")}>
        {rowSelection && (
          <td className={table("cell", { checkbox: true })}>
            <Checkbox
              className={table("checkbox")}
              indeterminate={isIndeterminate}
              checked={isAllRowChecked}
              onChange={() => handleAllRowSelect()}
            />
          </td>
        )}
        {columns.map((column, index) => {
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
