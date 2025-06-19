import { FC } from "react";
import { cn } from "../../../utils/cn";
import { useTableContext } from "../../TableContext";
import { DefaultRecordType } from "components/Table/types";

const table = cn("table");

type RowProps = {
  row: DefaultRecordType;
  rowIndex: number;
};

export const Row: FC<RowProps> = (props) => {
  const { row, rowIndex } = props;

  const { columns } = useTableContext();

  return (
    <tr className={table("row")}>
      {columns?.map((column, index) => {
        const { align, key, render } = column;
        return (
          <td className={table("cell", { align })} key={index}>
            {render ? render(row[key], row, rowIndex) : (row[key] as React.ReactNode)}
          </td>
        );
      })}
    </tr>
  );
};
