'use strict'

import ComponentWithProp from "./ComponentWithProp";

const PropWithDifferentTypes =()=>{
    
    const myNum = 10;
    const mybool = true;
    const str ="Hello";

    const myCar={
        brand:"BMW",
        model:"M5",
        reg:"W8M8",
        engineSizeInLt:3,
        interior:["sunroof",4,"heated seats", "applePlay"]
    }

    const carBrands = ["Audi","BMW","Merc","Ferrari", "Honda", "Mini","Ford","Dacia"]
    const someFunction= ()=> (`this is from the function we made!`);

    return(
        <ComponentWithProp
            numberProp={myNum}
            boolProp={mybool}
            stringProp={str}
            objProp={myCar}
            arrayProp={carBrands}
            functionProp={someFunction}
            addingMyOwn="text from my own prop here"
        />
    )

}
export default PropWithDifferentTypes;