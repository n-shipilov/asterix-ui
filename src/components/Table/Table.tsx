import { cn } from "../utils/cn";
import { TableProvider } from "./TableContext";
import { ColGroup } from "./ColGroup";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableProps } from "./types";
import "./Table.scss";

export const tableWrapper = cn("table-wrapper");
export const table = cn("table");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Table = <RecordType extends Record<string, any>>(props: TableProps<RecordType>) => {
  const { className, data, columns, rowKey = "key", rowSelection, scroll, ...attrs } = props;

  const providerProps = {
    className,

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
        <table className={table({}, className)} {...attrs}>
          <ColGroup />
          <TableHead />
          <TableBody />
        </table>
      </div>
    </TableProvider>
  );
};
