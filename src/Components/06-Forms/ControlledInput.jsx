import { useState } from "react";


const ControlledInput =()=>{

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = (e) =>{
        e.preventDefault();
        const dataToSend = JSON.stringify({userName,password})
        console.log("Data to post somehwre" , dataToSend);

    }

    return(
        <>
        <form onSubmit={handleForm}>
            <label>Username:</label>
            <input 
                id="userName"
                type="text"
                name="userName"
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
            />
            <label>Password:</label>
            <input 
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                // onChange={({target})=>setPassword(target.value)}
            />
        <button type="submit">Submit</button>

        </form>
        <p>{userName}</p>
        <p>{password}</p>

        </>

    )

}

export default ControlledInput;