import React from "react";

export type DefaultRecordType = Record<string, unknown>;

export type AlignType = "left" | "center" | "right";

export type ColumnType<RecordType> = {
  /** Идентификатор колонки */
  key: string;
  /** Заголовок колонки */
  title: string;
  /** Выравнивание содержимого колонки */
  align?: AlignType;
  /** Сортировка колонки (может быть boolean или function) */
  sorter?: boolean | CompareFn<RecordType>;
  /** Ширина колонки */
  width?: number | string;
  /** Определяет визуализацию ячейки таблицы */
  render?: (
    value: RecordType[keyof RecordType],
    record: RecordType,
    index: number,
  ) => React.ReactNode;
};

export type ColumnsType<RecordType> = ColumnType<RecordType>[];

export type TableProps<RecordType> = React.TableHTMLAttributes<HTMLTableElement> & {
  /** Источник данных */
  data?: RecordType[];
  /** Колонки таблицы */
  columns?: ColumnsType<RecordType>;
  /** Уникальный ключ строки (по умолчанию "key") */
  rowKey?: string | keyof RecordType;
};

export type TableProviderProps<RecordType> = TableProps<RecordType> & {
  children: React.ReactNode;
};

export type TableContextType<RecordType> = TableProps<RecordType> & {
  sorting: SortState;
  sortedData: RecordType[];
  handleChangeSorting: (key: string) => void;
};

export type CompareFn<RecordType> = (a: RecordType, b: RecordType) => number;

export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type SortDirectionType = SortDirection.ASC | SortDirection.DESC | null;

export type SortState = {
  key: string | null;
  direction: SortDirectionType;
};
