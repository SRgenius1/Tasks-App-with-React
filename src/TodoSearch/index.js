import React from "react";
import './TodoSearch.css';

function TodoSearch ({searchValue, setSearchValue}) {
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    };

    return (  
    <input 
    className="TodoSearch" 
    placeholder="Busca tu TODO"
    value={searchValue}
    onChange={onSearchValueChange}
    />
    );
};

export {TodoSearch};