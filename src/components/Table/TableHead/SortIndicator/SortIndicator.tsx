import React, { useMemo } from "react";
import { table } from "../../Table";
import { useTableContext } from "../../TableContext";
import { SortDirection } from "../../types";

export const SortIndicator: React.FC<{ columnKey: string }> = ({ columnKey }) => {
  const { sorting } = useTableContext();

  const indicator = useMemo(() => {
    if (columnKey !== sorting.key) return "⇅";
    if (sorting.direction === SortDirection.ASC) return "↑";
    if (sorting.direction === SortDirection.DESC) return "↓";
    return "⇅";
  }, [columnKey, sorting]);

  return <span className={table("sort-indicator")}>{indicator}</span>;
};
