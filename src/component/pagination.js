import React from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

export const Pagination = () => {
  const { CountResults, countPages, actualPage, nextPage, prevPage, GotoPage } =
    useContext(UserContext);
  return (
    <>
      <div className=" col-3 d-flex align-items-center mb-0">
        <b>Total:</b>
        {CountResults}
      </div>
      <div className=" col-3 d-flex align-items-center">
        <b>Page</b>:{actualPage} of {countPages}
      </div>
      <div className=" col-3 d-flex align-items-center">
        <b>Go to page</b>
        <select name="go to" 
                className="form-select w-auto" 
                value={actualPage}
                data-type="goto"
                onChange={e=> GotoPage("", e)}>
          {Array.from(Array(countPages).keys()).map((pages) => (
            <option key={pages+1} value={pages + 1}>{pages + 1}</option>
          ))}
        </select>
      </div>
      <div className=" col-3 text-end">
        {prevPage && (
          <button
            className="btn btn-success mb-0 mx-2"
            data-type="prev"
            onClick={(e) => GotoPage(prevPage, e)}
          >
            Prev
          </button>
        )}
        {nextPage && (
          <button
            className="btn btn-success"
            data-type="next"
            onClick={(e) => GotoPage(nextPage, e)}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};
