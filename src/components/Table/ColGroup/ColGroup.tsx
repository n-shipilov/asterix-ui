import React from "react";
import { useTableContext } from "../TableContext";

export const ColGroup: React.FC = () => {
  const { columns } = useTableContext();

  return (
    <colgroup>
      {columns.map((column, index) => {
        const { width } = column;
        return <col style={{ width }} key={index}></col>;
      })}
    </colgroup>
  );
};
