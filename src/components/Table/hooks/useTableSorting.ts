import { useCallback, useMemo, useState } from "react";
import {
  ColumnsType,
  DefaultRecordType,
  SortDirection,
  SortDirectionType,
  SortState,
} from "../types";

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
        return sortedData.sort(
          (a, b) => sorter(a, b) * (sorting.direction === SortDirection.ASC ? 1 : -1),
        );
      }
    }
    return sortedData;
  }, [columns, data, sorting]);

  const handleChangeSorting = useCallback((key: string) => {
    setSorting((prev) => {
      let direction: SortDirectionType = null;

      if (prev.key !== key) {
        direction = SortDirection.ASC;
      } else if (prev.direction === SortDirection.ASC) {
        direction = SortDirection.DESC;
      } else if (prev.direction === SortDirection.DESC) {
        direction = null;
      }

      return direction === null ? { key: null, direction: null } : { key, direction };
    });
  }, []);

  return { sorting, sortedData, handleChangeSorting };
};
