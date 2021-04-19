

const Child= (prop)=>{

    const {name,location,age,cars}= prop;

    return(
        <p>Hello {name}  from {location} who is {age} years old! who drives {cars}</p>
    )

}

export default Child;