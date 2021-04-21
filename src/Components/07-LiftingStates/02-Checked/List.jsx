

const List =({list,query,checkTodo})=>{
    // console.log("List",query);

    const filterQuery= (query)=>(list)=>list.title.includes(query.toLowerCase());
    const checkCompleted = (checkTodo)=>(list)=> list.completed == checkTodo;

    /**
     *! const filterQuery(query)=>{
     *!    return function(list){
     *!         list.tile.includes(query.toLowerCase());
     *!    }
     *!  }  
     */

    console.log(filterQuery);

    let filteredList
        if(checkTodo === true){
             filteredList = list.filter(filterQuery(query)).filter(checkCompleted(checkTodo))
        }else{
             filteredList = list.filter(filterQuery(query));
        }

    console.log(filteredList);
    
    
    return(
        <>
        <h3> Todo's</h3>
        {filteredList.map(tempVal =>(
            
            <div key={tempVal.id}>
                <h5>{tempVal.title}</h5>
                <input type="checkbox"  checked={tempVal.completed} readOnly/>
            </div>
            ))}
        </>

    )


}

export default List;