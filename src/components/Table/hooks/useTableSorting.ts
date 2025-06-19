import { useCallback, useMemo, useState } from "react";
import { ColumnsType, DefaultRecordType, SortDirection, SortState } from "../types";

type UseTableSortingProps<RecordType> = {
  data?: RecordType[];
  columns?: ColumnsType<RecordType>;
};

export const useTableSorting = <RecordType extends DefaultRecordType>(
  props: UseTableSortingProps<RecordType>,
) => {
  const { data, columns } = props;

  const [sorting, setSorting] = useState<SortState>({
    key: null,
    direction: null,
  });

  const sortedData = useMemo(() => {
    const sortedData = data ? [...data] : [];

    if (sorting.key) {
      const sorter = columns?.find((column) => column.key === sorting.key)?.sorter;

      if (typeof sorter === "boolean") {
        // Если column.sorter = boolean
        return sortedData;
      } else if (typeof sorter === "function") {
        // Если column.sorter = CompareFn
        return sortedData.sort((a, b) => sorter(a, b) * (sorting.direction === "asc" ? 1 : -1));
      }
    }
    return sortedData;
  }, [columns, data, sorting]);

  const handleChangeSorting = useCallback((key: string) => {
    setSorting((prev) => {
      let direction: SortDirection = null;

      if (prev.key !== key) {
        direction = "asc";
      } else if (prev.direction === "asc") {
        direction = "desc";
      } else if (prev.direction === "desc") {
        direction = null;
      }

      return direction === null ? { key: null, direction: null } : { key, direction };
    });
  }, []);

  return { sorting, sortedData, handleChangeSorting };
};
