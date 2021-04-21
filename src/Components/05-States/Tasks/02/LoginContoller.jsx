'use strict'; 

import {useState} from 'react'; 

const LoginController = (props) => {

    // usename & password
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState('');
    
    const handleForm = e => {
        e.preventDefault(); // default action
        console.log(userName,password);

        if(userName === "admin" & password ==="pass"){
            props.update();
        }else{
            console.log("NOOO!");
            // props.update();
        }
    }

    return(
        <>
            <form onSubmit={handleForm}>
                <label> Username: </label>
                <input 
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <label> Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )

}

export default LoginController; 