'use strict'

import ArrayItem from "./ArrayItem";

const ComponentWithProp =(props)=>{

    const {numberProp,boolProp,stringProp,objProp,arrayProp,functionProp,addingMyOwn} = props;

    //Empty array
    const objectToAShow =[];
    // key 
    // value
    //key:value
    // brand:"Audi"
    for(let[k,v] of Object.entries(objProp)){
        objectToAShow.push(<li key={k}> {k}: {v}</li>);
    }

    return (
        <>
            <p>number:{numberProp}</p>
            <p>bool:{boolProp}</p>
            <p>string:{stringProp}</p>
            <p>function:{functionProp()}</p>
            <p>my own added:{addingMyOwn}</p>
            {/* <p>myArray: {arrayProp}</p> */}

         {/* we used curly braces to let react know that we will use javascript */}
            {
                // for each element map it to the screen 
                //item is the current value
                // i position in the array
                arrayProp.map((item,i)=>(
                    <ArrayItem key={i} item={item}/>
                ))
            }
            <p>{objectToAShow}</p>


        </>
    )

}


export default ComponentWithProp;