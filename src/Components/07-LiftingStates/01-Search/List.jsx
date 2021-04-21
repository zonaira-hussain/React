

const List =({list,query})=>{
    // console.log("List",query);

    const filterQuery= (query)=>(list)=>list.title.includes(query.toLowerCase());

    /**
     *! const filterQuery(query)=>{
     *!    return function(list){
     *!         list.tile.includes(query.toLowerCase());
     *!    }
     *!  }  
     */

    console.log(filterQuery);

    let filteredList = list.filter(filterQuery(query))
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