import React from "react";
import { useTableContext } from "../TableContext";
import { table } from "../Table";
import { Empty } from "./Empty";
import { Row } from "./Row";
import { useTableSorting } from "../hooks";

export const TableBody: React.FC = () => {
  const { rowKey } = useTableContext();
  const { sortedData } = useTableSorting();

  return (
    <tbody className={table("body")}>
      {sortedData && sortedData.length > 0 ? (
        sortedData.map((row, index) => <Row row={row} rowIndex={index} key={row[rowKey!]} />)
      ) : (
        <Empty />
      )}
    </tbody>
  );
};
