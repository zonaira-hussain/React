'use strict'

import EndContactContactCardBluePrint from "./EndContactCardBluePrint"

const EndContactCard =()=>{
    return (
        <div className="Contact-card-list">
          <EndContactContactCardBluePrint
            whatPet="This is a dog"
            petName="Harry Pawter"
            // phone="(+44)77777777"
            email=" jimmy@chew.pup"
            img="https://placedog.net/samples/2.jpg"
          />
          <EndContactContactCardBluePrint
            petName="jimmy chew"
            phone="(+44)77777777"
            email=" jimmy@chew.pup"
            img="https://placedog.net/samples/5.jpg"
          />
          <EndContactContactCardBluePrint
            petName="Bark Wahlberg"
            phone="(+44)77777777"
            email=" BarkWahlberg@chew.pup"
            img="https://placedog.net/samples/15.jpg"
          />
          <EndContactContactCardBluePrint
            petName="Indiana Bones"
            phone="(+44)77777777"
            email=" IndianaBones@chew.pup"
            img="https://placedog.net/samples/5.jpg"
          />
        </div>
    )

}

export default EndContactCard