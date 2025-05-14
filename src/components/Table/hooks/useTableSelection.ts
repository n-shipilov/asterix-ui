import { useTableContext } from "../TableContext";

export const useTableSelection = () => {
  const { data, rowSelection, rowKey, selectedRowKeys, setSelectedRowKeys } = useTableContext();

  const isIndeterminate = data && !!selectedRowKeys.length && selectedRowKeys.length < data.length;

  const isAllRowChecked = data && data.length > 0 && selectedRowKeys.length === data.length;

  const isRowChecked = (row: any) => selectedRowKeys.some((item) => item === row[rowKey!]);

  const handleRowSelect = (row: any) => {
    if (isRowChecked(row)) {
      const updatedRows = selectedRowKeys.filter((selectedRow) => selectedRow !== row[rowKey!]);
      setSelectedRowKeys(updatedRows);
      rowSelection?.onChange?.(updatedRows);
    } else {
      setSelectedRowKeys([...selectedRowKeys, row[rowKey!]]);
      rowSelection?.onChange?.([...selectedRowKeys, row[rowKey!]]);
    }
  };

  const handleAllRowSelect = () => {
    if (!data) {
      setSelectedRowKeys([]);
      rowSelection?.onChange?.([]);
      return;
    }

    const allKeys = data.map((item) => item[rowKey!]);

    if (selectedRowKeys.length === data.length) {
      setSelectedRowKeys([]);
      rowSelection?.onChange?.([]);
    } else {
      setSelectedRowKeys(allKeys);
      rowSelection?.onChange?.(allKeys);
    }
  };

  return {
    isAllRowChecked,
    isIndeterminate,
    isRowChecked,
    handleRowSelect,
    handleAllRowSelect,
  };
};
