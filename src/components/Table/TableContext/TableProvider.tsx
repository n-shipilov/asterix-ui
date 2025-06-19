import { DefaultRecordType, TableProviderProps } from "../types";
import { TableContext } from "./TableContext";
import { useTableSorting } from "../hooks";

export const TableProvider = <RecordType extends DefaultRecordType>(
  props: TableProviderProps<RecordType>,
) => {
  const { children, data, columns, rowKey } = props;

  const { sorting, sortedData, handleChangeSorting } = useTableSorting({ data, columns });

  const context = {
    data,
    columns,
    rowKey,

    // Сортировка
    sorting,
    sortedData,
    handleChangeSorting,
  };

  return <TableContext.Provider value={context}>{children}</TableContext.Provider>;
};
