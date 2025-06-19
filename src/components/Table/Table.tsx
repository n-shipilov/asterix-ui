import { cn } from "../utils/cn";
import { TableProvider } from "./TableContext";
import { ColGroup } from "./ColGroup";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { DefaultRecordType, TableProps } from "./types";
import "./Table.scss";

export const tableWrapper = cn("table-wrapper");
export const table = cn("table");

export const Table = <RecordType extends DefaultRecordType>(props: TableProps<RecordType>) => {
  const { className, data, columns, rowKey = "key", ...attrs } = props;

  const providerProps = {
    className,
    data,
    columns,
    rowKey,
  };

  return (
    <TableProvider {...providerProps}>
      <div className={tableWrapper()}>
        <table className={table({}, className)} {...attrs}>
          <ColGroup />
          <TableHead />
          <TableBody />
        </table>
      </div>
    </TableProvider>
  );
};
