import React from "react";
import { cn } from "../utils/cn";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { ChevronBottom } from "../ChevronBottom";
import { ChevronLeft } from "../ChevronLeft";
import { ChevronRight } from "../ChevronRight";
import { DOTS, usePagination } from "./hooks/usePagination";
import "./Pagination.scss";

export type PaginationProps = {
  page: number;
  pageSize: number;
  pageSizeOptions?: string[] | number[];
  total?: number;
  onChange: (page: number, pageSize: number) => void;
};

const block = cn("pagination");

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { page = 1, pageSize = 10, pageSizeOptions = [10, 20, 50], total = 20, onChange } = props;

  const items = usePagination({
    page,
    pageSize,
    total,
  });

  const getNumberOfPages = (pageSize: number, total = 0) => Math.floor((total - 1) / pageSize) + 1;

  const handleNextPage = () => {
    onChange(page + 1, pageSize);
  };

  const handlePreviousPage = () => {
    onChange(page - 1, pageSize);
  };

  const handleChangePageSize = (pageSize: number) => {
    const numberOfPages = getNumberOfPages(pageSize, total);

    const hasUpperLimit = numberOfPages > 0;

    if (!hasUpperLimit) {
      onChange(1, pageSize);
      return;
    }

    const newPage = page > numberOfPages ? numberOfPages : page;

    onChange(newPage, pageSize);
  };

  if (total === undefined || total === 0 || total < pageSize) {
    return null;
  }

  return (
    <div className={block()}>
      <div className={block("page-sizer")}>
        Показывать
        <Dropdown
          onOptionSelect={(_, option) => handleChangePageSize(option.key as number)}
          options={pageSizeOptions.map((item) => ({
            key: item,
            label: item.toString(),
          }))}
        >
          <Button size="s" view="secondary">
            {pageSize}
            <Icon data={ChevronBottom} size="16" />
          </Button>
        </Dropdown>
        элементов из {total}
      </div>
      <div className={block("numbers")}>
        <Button size="s" view="ghost" disabled={page === 1} onClick={handlePreviousPage}>
          <Icon data={ChevronLeft} size="16" />
        </Button>
        {items.map((pageNumber, index) => {
          return pageNumber === DOTS ? (
            <div className={block("dots")} key={index}>
              &#8230;
            </div>
          ) : (
            <Button
              size="s"
              className={block("number")}
              style={{ width: "28px" }}
              view="ghost"
              selected={pageNumber === page}
              onClick={() => onChange(pageNumber, pageSize)}
              key={index}
            >
              {pageNumber}
            </Button>
          );
        })}
        <Button
          size="s"
          view="ghost"
          disabled={page === getNumberOfPages(pageSize, total)}
          onClick={handleNextPage}
        >
          <Icon data={ChevronRight} size="16" />
        </Button>
      </div>
    </div>
  );
};
