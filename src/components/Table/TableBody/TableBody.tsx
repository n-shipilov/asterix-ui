import React from "react";
import { SortService } from "../Services";
import { useTableContext } from "../TableContext";
import { table } from "../Table";
import { Empty } from "./Empty";
import { Row } from "./Row";

export const TableBody: React.FC = () => {
  const { rowKey } = useTableContext();
  const { getSortedData } = SortService();

  return (
    <tbody className={table("body")}>
      {getSortedData().length > 0 ? (
        getSortedData().map((row, index) => (
          <Row row={row} rowIndex={index} key={row[rowKey!]} />
        ))
      ) : (
        <Empty />
      )}
    </tbody>
  );
};
