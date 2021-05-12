import React from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({ setPageNumber, arrFilter, elementsPerPage }) => {
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            pageCount={Math.ceil(arrFilter().length / elementsPerPage)}
            onPageChange={changePage}
            containerClassName={"pagination__button--page"}
            previousLinkClassName={"pagination__button--previous"}
            nextLinkClassName={"pagination__button--next"}
            disabledClassName={"pagination__disable"}
            activeLinkClassName={"pagination__active"}
        />
    );
};

export default Paginate;
