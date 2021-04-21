

const Employee=({person})=>{

    return(
        <>
            <td>{person.employee_name}</td>
            <td>{person.employee_salary}</td>
            <td>{person.employee_age}</td>
        </>
    )

}

export default Employee;