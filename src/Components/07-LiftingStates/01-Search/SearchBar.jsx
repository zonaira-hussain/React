

const SearchBar =({query,queryFunction})=>{



    return(
        <>
        <label>Search:</label>
        <input type="text" name="q" id="search" value={query} onChange={queryFunction}/>
        </>
    )


}

export default SearchBar;