import { useTableContext } from "../TableContext";

export const useTableSorting = () => {
  const { data, columns, sorting, setSorting } = useTableContext();

  const handleChangeSorting = (columnKey: string) => {
    if (columnKey === sorting.column) {
      switch (sorting.order) {
        case "asc":
          setSorting({ column: columnKey, order: "desc" });
          break;
        case "desc":
          setSorting({ column: undefined, order: undefined });
          break;
        default:
          setSorting({ column: columnKey, order: "asc" });
          break;
      }
    } else {
      setSorting({ column: columnKey, order: "asc" });
    }
  };

  const getSortedData = () => {
    if (sorting.column) {
      const sorter = columns.find((column) => column.key === sorting.column)?.sorter;

      if (typeof sorter === "boolean") {
        // Если column.sorter = boolean
        return data;
      } else if (typeof sorter === "function") {
        // Если column.sorter = CompareFn
        return [...data].sort((a, b) => sorter(a, b) * (sorting.order === "asc" ? 1 : -1));
      }
    }
    return data;
  };

  return { sortedData: getSortedData(), handleChangeSorting };
};
