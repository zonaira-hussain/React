import Peoples from './People.json'
import Person from './Person'

const  User =()=>{

    return(
        <>
        {
            Peoples.map(person=>
                <Person
                key={person.id}
                name={person.name}
                userName={person.username}
                city={person.address.city}
                website={person.website}
                />
            )
        }
        </>
    )

}

export default User
