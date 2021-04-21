

const SearchBar =({query,queryFunction, checkTodo,checkHandler})=>{



    return(
        <>
        <label>Search:</label>
        <input type="text" name="q" id="search" value={query} onChange={queryFunction}/>
        <label >Completed:</label>
        <input type="checkbox" value={checkTodo} onChange={checkHandler}/>
        </>
    )


}

export default SearchBar;