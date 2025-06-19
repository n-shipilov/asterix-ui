import { useContext } from "react";
import { DefaultRecordType, TableContextType } from "../types";
import { TableContext } from "./TableContext";

export const useTableContext = <RecordType extends DefaultRecordType>() => {
  const context = useContext(TableContext) as TableContextType<RecordType>;

  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};
