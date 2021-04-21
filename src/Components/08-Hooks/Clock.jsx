import { useEffect, useState } from "react";


const Clock =()=>{

    const [time,setTime] = useState(new Date().toLocaleTimeString());

    // use effect - re-renders the component everytime this is a change that it see's
    useEffect(()=>{
    //  console.log("fire");
     setTimeout(tick,3000)
    },[time])
    // blank will keep firing 
    // [] will once and only once
    // [time] - will only fire when the time variable has changed

    const tick =()=>{
        setTime(new Date().toLocaleTimeString());
    }

    return(
        <h1>{time}</h1>
    )

}


export default Clock;