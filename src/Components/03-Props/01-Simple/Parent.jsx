'use strict'

import Child from "./Child";

const Parent= ()=>{
    return (
    <>
        <h1>Hello from parent</h1>
        <Child name="Vinesh" age={900} location="London" cars="Audi"/>
    </>
    )

}

export default Parent;