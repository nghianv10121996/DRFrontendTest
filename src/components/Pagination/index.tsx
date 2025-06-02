import React from "react";
import "./styles.scss";
import { FIRST_PAGE, LEFT_NUMBER_BUTTON, SHOW_BUTTON } from "@/constants";

interface IPagination {
  total: number;
  currentPage: number;
  pageSize: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<IPagination> = (props) => {
  const { total, currentPage = 1, pageSize, onChange } = props;
  const totalPage = Math.ceil(total / pageSize);
  const numberShowButton = totalPage < SHOW_BUTTON ? totalPage : SHOW_BUTTON;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    let endNumber = Math.max(currentPage, currentPage + LEFT_NUMBER_BUTTON >= totalPage ? totalPage : currentPage + LEFT_NUMBER_BUTTON);
    let start = (endNumber + 1) - SHOW_BUTTON;
    if(start <= 0) {
      for(let i = FIRST_PAGE; i <= numberShowButton; i++) {{
        pages.push(i);
      }}
    } else {
      for(let i = start <= 0 ? 0 : start; i <= endNumber; i++) {{
        pages.push(i);
      }}
    }
    return pages;
  };

  const handleNext = () => {
    onChange(Number(currentPage) + 1)
  }

  const handlePrev = () => {
    onChange(Number(currentPage) - 1)
  }

  return (
    <div className="pagination">
      <button disabled={currentPage === FIRST_PAGE} className="pagination__icon-left" onClick={handlePrev}>
        <img src="/images/arrow-left.svg"/>
      </button>
      <div className="pagination__list">
        {getPageNumbers().map((page, index) => {
          const classActive = page === currentPage ? "--active" : ""
          return (
            <p key={index} onClick={() => onChange(Number(page))} className={`pagination__list-item ${classActive}`}>{page}</p>
          )
        })}
      </div>
      <button disabled={currentPage === totalPage} className="pagination__icon-right" onClick={handleNext}>
        <img src="/images/arrow-right.svg"/>
      </button>
    </div>
  )
}

export default Pagination;