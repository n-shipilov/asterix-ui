import { FC } from "react";
import { cn } from "../../../utils/cn";
import { useTableContext } from "../../TableContext";
import { Checkbox } from "../../../Checkbox";
import { useTableSelection } from "components/Table/hooks";

const table = cn("table");

interface RowProps {
  row: any;
  rowIndex: number;
}

export const Row: FC<RowProps> = (props) => {
  const { row, rowIndex } = props;

  const { columns, rowSelection } = useTableContext();
  const { isRowChecked, handleRowSelect } = useTableSelection();

  return (
    <tr
      className={table("row", {
        selected: isRowChecked(row),
      })}
      key={rowIndex}
    >
      {rowSelection && (
        <td className={table("cell", { checkbox: true })}>
          <Checkbox
            className={table("checkbox")}
            checked={isRowChecked(row)}
            onChange={() => handleRowSelect(row)}
          />
        </td>
      )}
      {columns.map((column, index) => {
        const { align, key, render } = column;
        return (
          <td className={table("cell", { align })} key={index}>
            {render ? render(row[key], row, rowIndex) : row[key]}
          </td>
        );
      })}
    </tr>
  );
};
