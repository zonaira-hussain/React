'use strict'

import MyFooter from "./MyFooter"
import MyHeader from "./MyHeader"
import Navigation from "./Navigation"


const Standard =()=>{
    return(
        <>
            <MyHeader/>
            <Navigation/>
            <div>
                <section>
                    <h1>Welcome to the main</h1>
                </section>
            </div>
            {/* <MyFooter/> */}
        </>

    )

}

export default Standard

