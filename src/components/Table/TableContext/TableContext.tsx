import React, { createContext, useContext, useState } from "react";
import { SortState, TableProps, TableProviderProps } from "../types";

type TableContext<RecordType> = TableProps<RecordType> & {
  sorting: SortState;
  setSorting: React.Dispatch<React.SetStateAction<SortState>>;

  selectedRowKeys: Array<string | number>;
  setSelectedRowKeys: React.Dispatch<
    React.SetStateAction<Array<string | number>>
  >;
};

export const TableContext = createContext({});

export const TableProvider = <RecordType extends Object>(
  props: TableProviderProps<RecordType>
) => {
  const { children, data, columns, rowKey, rowSelection, scroll } = props;

  const [sorting, setSorting] = useState<SortState>({
    column: undefined,
    order: undefined,
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState<
    Array<string | number>
  >(rowSelection?.selectedRowKeys ?? []);

  const context: TableContext<RecordType> = {
    data,
    columns,

    rowKey,

    rowSelection,
    scroll,

    ////

    sorting,
    setSorting,

    selectedRowKeys,
    setSelectedRowKeys,
  };

  return (
    <TableContext.Provider value={context}>{children}</TableContext.Provider>
  );
};

export const useTableContext = (): TableContext<any> => {
  const context = useContext(TableContext) as TableContext<any>;

  return context;
};
