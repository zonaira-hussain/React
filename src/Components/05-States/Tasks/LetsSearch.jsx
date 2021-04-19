import { useState } from "react";

const LetsSearch =()=>{
   const ProductList=[
    {name:"apples",type:"fruit"},{ name:"pears",type:"fruit"},{name:"grapes",type:"fruit"},{name:"spinach",type:"veg"},{name:"kale",type:"veg"}]

    console.log(ProductList);

    // stateful value holds the truth - single source of truth 
    // function to update the stateful value causes a rerender
    const [searchQ, setSearchQ] = useState("");

    const handleForm = (e)=>{
        e.preventDefault();
    }

    console.log("The search q is",searchQ);
    const result = ProductList.filter(item => item.name.includes(searchQ.toLowerCase()));
    console.log(result);
return(
    <>
    <h1>My Shop</h1>
    <form onSubmit={handleForm}>
        <label htmlFor="search">Search :</label>
        <input type="text" name="search" id="search" value={searchQ} onChange={(e)=>setSearchQ(e.target.value)}/>
        <p>All items matched {searchQ}</p>
        {
            result.map((items)=>(
                <li>{items.name}</li>
            ))
        }
        
    </form>
    </>
)

}

export default LetsSearch;
