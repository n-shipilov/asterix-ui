import React, { useMemo } from "react";
import { table } from "../../Table";
import { useTableContext } from "../../TableContext";

export const SortIndicator: React.FC<{ columnKey: string }> = ({ columnKey }) => {
  const { sorting } = useTableContext();

  const indicator = useMemo(() => {
    if (columnKey !== sorting.key) return "⇅";
    if (sorting.direction === "asc") return "↑";
    if (sorting.direction === "desc") return "↓";
    return "⇅";
  }, [columnKey, sorting]);

  return <span className={table("sort-indicator")}>{indicator}</span>;
};
