import { useState } from "react";

function SearchBar({onUpdateSearch}) {
    return <input type="search" onChange={onUpdateSearch} />;
};
function Overview({currentTerm}) {
    return <p>Currently searching for: {currentTerm}</p>;
};

export {SearchBar, Overview};