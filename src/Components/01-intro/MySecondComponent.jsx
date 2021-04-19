


const MySecondComponent=()=>{

    const name = `Vinesh Ghela`;
    const date = new Date();
    const location =`London`;
    const car =`Audi`;

    return(
        // Fragment
        <>
            <h3>Hello my friends- welcome to my bio</h3>
            <p>{name}</p>
            <p>Todays date and time is : {date.toLocaleDateString()},{date.toLocaleTimeString()}</p>
            <p>{location}</p>
            <p>{`my name is ${name} i drive a ${car}`}</p>
        </>
    )
}

export default MySecondComponent;


