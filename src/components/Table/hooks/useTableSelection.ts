import { useTableContext } from "../TableContext";

export const useTableSelection = () => {
  const { data, rowSelection, rowKey, selectedRowKeys, setSelectedRowKeys } = useTableContext();

  const isIndeterminate = !!selectedRowKeys.length && selectedRowKeys.length < data.length;

  const isAllRowChecked = data.length > 0 && selectedRowKeys.length === data.length;

  const isRowChecked = (row: any) => selectedRowKeys.some((item) => item === row[rowKey!]);

  const handleRowSelect = (row: any) => {
    if (isRowChecked(row)) {
      const updatedRows = selectedRowKeys.filter((selectedRow) => selectedRow !== row[rowKey!]);
      setSelectedRowKeys(updatedRows);
      rowSelection?.onChange && rowSelection.onChange(updatedRows);
    } else {
      setSelectedRowKeys([...selectedRowKeys, row[rowKey!]]);
      rowSelection?.onChange && rowSelection.onChange([...selectedRowKeys, row[rowKey!]]);
    }
  };

  const handleAllRowSelect = () => {
    if (selectedRowKeys.length === data.length) {
      setSelectedRowKeys([]);
      rowSelection?.onChange && rowSelection.onChange([]);
    } else {
      setSelectedRowKeys(data.map((item) => item[rowKey!]));
      rowSelection?.onChange && rowSelection.onChange(data.map((item) => item[rowKey!]));
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
