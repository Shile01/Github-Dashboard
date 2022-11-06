import React, { useState, useEffect } from "react";

// icons
import { ReactComponent as ArrowLeft } from "../assets/Arrow-Left.svg";
import { ReactComponent as ArrowRight } from "../assets/Arrow-Right.svg";

function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(true);

  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage > 1) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }

    if (currentPage === numberOfPages) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [currentPage, numberOfPages]);
  return (
    <>
      <section>
        <ul className="pagination">
          <li className="previous">
            <button
              className={disabledPrev ? "disable-btn" : "page-link"}
              onClick={prevPage}
            >
              <div className="prev-icon">
                <ArrowLeft/>
              </div>
              <span class="nav-text">Previous</span>
            </button>
          </li>
          {pageNumbers.map((pgNumber) => (
            <li key={pgNumber} className="">
              <button onClick={() => setCurrentPage(pgNumber)} className="page-number">
                {pgNumber}
              </button>
            </li>
          ))}
          <li className="next">
            <button
              className={disabledNext ? "disable-btn" : "page-link"}
              onClick={nextPage}
            >
              <span class="nav-text">Next</span>
              <div className="prev-icon">
                <ArrowRight/>
              </div>
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Pagination;
