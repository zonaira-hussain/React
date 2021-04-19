

const ClockFunctional =()=>{

    let date = new Date().toLocaleTimeString();

    const tick =()=>{
        date = new Date().toLocaleTimeString();
        console.log(date);
        window.location.reload();
    }

    return (
        <div>
            <h1>{date}</h1>
            <button onClick={tick}>Update time</button>
        </div>
    )

}

export default ClockFunctional