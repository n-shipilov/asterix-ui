import React from "react";
import { table } from "../../Table";
import { Column } from "../../types";
import { useTableContext } from "../../TableContext";
import { SortService } from "../../Services";
import "./Sort.scss";

type SortProps = {
  column: Column<any>;
};

export const Sort: React.FC<SortProps> = (props) => {
  const { column } = props;

  const { sorting } = useTableContext();
  const { handleChangeSorting } = SortService();

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
