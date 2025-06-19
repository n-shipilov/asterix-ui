import React from "react";
import { useTableContext } from "../TableContext";
import { table } from "../Table";
import { Empty } from "./Empty";
import { Row } from "./Row";

export const TableBody: React.FC = () => {
  const { sortedData } = useTableContext();

  return (
    <tbody className={table("body")}>
      {sortedData.length > 0 ? (
        sortedData.map((row, index) => <Row row={row} rowIndex={index} key={index} />)
      ) : (
        <Empty />
      )}
    </tbody>
  );
};
