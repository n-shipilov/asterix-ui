import { cn } from "../utils/cn";
import { TableProvider } from "./TableContext";
import { ColGroup } from "./ColGroup";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableProps } from "./types";
import "./Table.scss";

export const tableWrapper = cn("table-wrapper");
export const table = cn("table");

export const Table = <RecordType extends object>(props: TableProps<RecordType>) => {
  const { data, columns, rowKey = "key", rowSelection, scroll, ...attrs } = props;

  const providerProps = {
    data,
    columns,

    rowKey,

    rowSelection,
    scroll,
  };

  return (
    <TableProvider {...providerProps}>
      <div
        className={tableWrapper({
          scroll_horizontal: !!scroll?.x,
          scroll_vertical: !!scroll?.y,
        })}
        style={{ height: scroll ? scroll.y : undefined }}
      >
        <table className={table()} {...attrs}>
          <ColGroup />
          <TableHead />
          <TableBody />
        </table>
      </div>
    </TableProvider>
  );
};
