import React from "react";
import { useTableSorting } from "../../hooks";
import { table } from "../../Table";
import { useTableContext } from "../../TableContext";
import { ColumnType } from "../../types";
import "./Sort.scss";

type SortProps = {
  column: ColumnType<any>;
};

export const Sort: React.FC<SortProps> = (props) => {
  const { column } = props;

  const { sorting } = useTableContext();
  const { handleChangeSorting } = useTableSorting();

  const { key: columnKey, title } = column;

  const renderIndicator = () => {
    if (sorting.order === "asc") {
      return "↑";
    } else if (sorting.order === "desc") {
      return "↓";
    }
    return "⇅";
  };

  return (
    <div
      className={table("sort", {
        active: columnKey === sorting.column,
      })}
      onClick={() => handleChangeSorting(columnKey)}
    >
      {title}
      <span className={table("sort-indicator")}>{renderIndicator()}</span>
    </div>
  );
};
