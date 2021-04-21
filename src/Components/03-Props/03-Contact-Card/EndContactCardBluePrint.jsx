

import PropTypes from 'prop-types';

const EndContactContactCardBluePrint =(props)=>{
  
  const {img,petName,phone,email} = props;

    return (
            <div className="contact-card">
              <h2>{props.whatPet}</h2>
              <img src={img} alt="this is a of a dog"/>  
              <h3>{petName}</h3>
              <p>Phone: {phone}</p>
              <p>Email:{email}</p>
            </div>
            
    )
    
  }

  EndContactContactCardBluePrint.defaultProps={
    whatPet:`use this value, IF nothing is passed in!`

  }
  EndContactContactCardBluePrint.propTypes= {
    petName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }

export default EndContactContactCardBluePrint