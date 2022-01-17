import React from 'react';

function Filter({handleFilter, handleSort, handleSortByWeight}){
    return (
        <>
            <div> Only greased: <input onClick={handleFilter} type="checkbox" id="filter"></input></div>
            <div> Sort by name: <input onClick={handleSort} type="checkbox" id="sort"></input></div>
            <div> weight: <input onClick={handleSortByWeight} type="checkbox" id="sort"></input></div>
        </>
    )
}

export default Filter;