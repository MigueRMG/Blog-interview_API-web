import React from "react";
import SearchInput from "./SearchInput";
import Paginate from "./Paginate";
import { useState } from "react";

const List = ({ render, setSearchTerm = "", elementsPerPage, arrFilter, loading = false, isSearch = true }) => {
    const [pageNumber, setPageNumber] = useState(0);

    const pagesVisited = pageNumber * elementsPerPage;

    const display = arrFilter()
        .slice(pagesVisited, pagesVisited + elementsPerPage)
        .map((elem, index) => {
            return render(elem, index);
        });

    return (
        <>
            {isSearch && <SearchInput setSearchTerm={setSearchTerm} setPageNumber={setPageNumber}></SearchInput>}
            {arrFilter().length === 0 && !loading && isSearch && <h1 className="search--notFound">Not Found</h1>}
            {display}
            {arrFilter().length > elementsPerPage && (
                <Paginate setPageNumber={setPageNumber} arrFilter={arrFilter} elementsPerPage={elementsPerPage}></Paginate>
            )}
        </>
    );
};

export default List;
