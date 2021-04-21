import { useState } from "react";
import LoginController from "./LoginContoller";
import LogOut from "./LogOut";


const Greeting =()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const update =()=>{
        setIsLoggedIn(c=> !c);
    }

    if(isLoggedIn){
        return(
        <>
        <h1>Welcome back </h1>
        <LogOut update={update}/>
        </>
        )
    }else{
        return(
        <>
        <h1>Please sign up:</h1>
        <LoginController update={update}/>
        </>
        )
    }

}

export default Greeting;