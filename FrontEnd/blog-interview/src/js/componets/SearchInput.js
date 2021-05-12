import React from "react";

const SearchInput = ({ setSearchTerm, setPageNumber }) => {
    return (
        <input
            className="input__search"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
                setSearchTerm(event.target.value);
                setPageNumber(0);
            }}
        />
    );
};

export default SearchInput;
