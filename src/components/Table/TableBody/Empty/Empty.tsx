import React from "react";
import { table } from "../../Table";
import { useTableContext } from "../../TableContext";

export const Empty: React.FC = () => {
  const { columns } = useTableContext();

  return (
    <tr className={table("row", { empty: true })}>
      <td className={table("cell")} colSpan={columns?.length}>
        No data
      </td>
    </tr>
  );
};
