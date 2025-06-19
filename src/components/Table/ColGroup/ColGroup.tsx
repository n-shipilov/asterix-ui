import React from "react";
import { useTableContext } from "../TableContext";

export const ColGroup: React.FC = () => {
  const { columns } = useTableContext();

  return (
    <colgroup>
      {columns?.map((column) => {
        const { width, key } = column;
        return <col style={{ width }} key={key}></col>;
      })}
    </colgroup>
  );
};
