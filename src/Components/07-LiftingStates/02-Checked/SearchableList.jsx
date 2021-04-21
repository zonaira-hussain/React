import { useState } from "react";
import List from './List'
import SearchBar from './SearchBar'
import ListOfTodos from '../Todo.json'

const SearchableList =()=>{

    const [query,setQuery] = useState("");
    const [checkTodo ,setCheckTodo] = useState(false);

    const queryHandler =(e)=>{
        setQuery(e.target.value);

        // query = e.target.value;
    }
    const checkHandler=(e)=>{
        setCheckTodo(!checkTodo)
    }

    return(
        <>
        <h1>Welcome to my basic todo app</h1>
        <SearchBar 
            query={query} 
            queryFunction={queryHandler}
            checkTodo={checkTodo}
            checkHandler={checkHandler}
        />
        <List 
            list={ListOfTodos} 
            query={query}
            checkTodo={checkTodo}
        />
        </>
    )

}

export default SearchableList;