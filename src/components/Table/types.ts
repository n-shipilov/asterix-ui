import React from "react";

export type Column<RecordType> = {
  /** Идентификатор колонки */
  key: string;
  /** Заголовок колонки */
  title: string;
  /** Выравнивание содержимого колонки */
  align?: "left" | "center" | "right";
  /** Сортировка колонки (может быть boolean и function) */
  sorter?: boolean | CompareFn<RecordType>;
  /** Ширина колонки */
  width?: number | string;
  /** Определяет визуализацию ячейки таблицы */
  render?: (value: any, record: RecordType, index: number) => React.ReactNode;
};

export type ColumnsType<RecordType> = Column<RecordType>[];

export type TableProps<RecordType> =
  React.TableHTMLAttributes<HTMLTableElement> & {
    /** Источник данных */
    data: RecordType[];
    /** Колонки таблицы */
    columns: ColumnsType<RecordType>;
    /** Уникальный ключ строки (по умолчанию "key") */
    rowKey?: string | keyof RecordType;
    /** Опции при выборе строки с помощью чекбокса  */
    rowSelection?: RowSelection;
    /** Параметры прокрутки таблицы */
    scroll?: ScrollType;
  };

export type TableProviderProps<RecordType> = TableProps<RecordType> & {
  children: React.ReactNode;
};

export type SortOrder = "asc" | "desc";

export type SortState = {
  column?: string;
  order?: SortOrder;
};

export type CompareFn<T> = (a: T, b: T) => number;

export type RowSelection = {
  /** Ключи выбранных строк по умолчанию */
  selectedRowKeys?: Array<string | number>;
  /** Колбэк функция, выполняющаяся при выборе строк */
  onChange?: (selectedRowKeys: Array<string | number>) => void;
};

export type ScrollType = {
  /** Задает горизонтальную прокрутку */
  x?: string | number | true;
  /** Задает вертикальную прокрутку */
  y?: string | number;
};
