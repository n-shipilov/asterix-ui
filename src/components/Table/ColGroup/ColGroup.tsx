import React from "react";
import { useTableContext } from "../TableContext";

export const ColGroup: React.FC = () => {
  const { columns, rowSelection } = useTableContext();

  return (
    <colgroup>
      {rowSelection && <col></col>}
      {columns.map((column, index) => {
        const { width } = column;
        return <col style={{ width }} key={index}></col>;
      })}
    </colgroup>
  );
};
