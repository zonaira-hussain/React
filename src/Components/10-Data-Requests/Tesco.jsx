
import { useEffect, useState } from 'react';
import axios from 'axios';
import Employee from './Employee';
import { Table, Spinner } from 'reactstrap';

const Tesco =()=>{

    //set our data
    const [info, setInfo] = useState([]);
    // setting out error obj
    const [error,setError]= useState(null);
    // loading...
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
        axios
            .get(`http://dummy.restapiexample.com/api/v1/employees`)
            .then((response)=>{
                // console.log(response);
                // console.log(response.data.data);
                setIsLoaded(true);
               setInfo(response.data.data)
            //    console.log("info",info);
            })
            .catch((error)=>{
                setIsLoaded(true);
              setError(error);
            })
         },10000 )
    },[])

    if(error){
        return <h1>OH Noo something went wrong!!!! {error.message}</h1>
    }else if (!isLoaded){
        return(
            <>
                <p>Please wait.... we are getting your request</p>
                <Spinner color="primary" />
                <Spinner color="Danger" />
                <Spinner color="info" />
                <Spinner color="primary" />
            </>
        )
    }else{

    return(
        <Table>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Salary:</th>
                    <th>age:</th>
                </tr>
            </thead>
            <tbody>
                {
                    info.map((person)=>(
                        <tr>
                            <Employee key={person.id} person={person}/>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    )
            }
}

export default Tesco