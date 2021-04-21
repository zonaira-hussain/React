import { useState } from "react";
import List from './List'
import SearchBar from './SearchBar'
import ListOfTodos from '../Todo.json'

const SearchableList =()=>{

    const [query,setQuery] = useState("");
    console.log(query);

    const queryHandler =(e)=>{
        setQuery(e.target.value);
    }

    return(
        <>
        <h1>Welcome to my basic todo app</h1>
        <SearchBar query={query} queryFunction={queryHandler}/>
        <List list={ListOfTodos} query={query}/>
        </>
    )

}

export default SearchableList;