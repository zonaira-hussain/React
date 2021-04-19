import { useState } from "react";
import ChildCounter from "./ChildCounter";


const Counter=()=>{
    
    //stateful value
    // function to update our stateful value

    const [count,setCount] = useState(0);
    const increment = ()=>{
        console.log("i want to add 1");
        setCount(c=>c+1);
    }

return(
    <>
    <ChildCounter count={count}/>
    <p>the current val of count from parent is {count}</p>
    <button onClick={increment}>++</button>
    <button onClick={()=>setCount(c => c-1)}>--</button>
    </>
)

}

export default Counter;