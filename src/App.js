// import MyFirstComponent from './Components/01-intro/MyFirstComponent'
import MySecondComponent from './Components/01-intro/MySecondComponent'
import MyFooter from './Components/02-Parent-Child/MyFooter'
import Standard from './Components/02-Parent-Child/Standard'
import Parent from './Components/03-Props/01-Simple/Parent'
import PropWithDifferentTypes from './Components/03-Props/02-intermediate/PropWithDifferentTypes'
import EndContactCard from './Components/03-Props/03-Contact-Card/EndContactCard '
import FirstContactCard from './Components/03-Props/03-Contact-Card/WIPFirstContactCard'
import Blog from './Components/03-Props/Static-data/CommentData/Blog'
import User from './Components/03-Props/Static-data/PeopleData/User'
import Strap from './Components/03-Props/Strap'
import ClassClock from './Components/04-Lifecycle/ClassClock'
import ClockFunctional from './Components/04-Lifecycle/ClockFunctional'
import Counter from './Components/05-States/AddingState/Counter'
import DifferentStates from './Components/05-States/DifferentStates'
import LetsSearch from './Components/05-States/Tasks/LetsSearch'
import ControlledInput from './Components/06-Forms/ControlledInput'
import UncontrolledInput from './Components/06-Forms/UncontrolledInput'

const App=()=> {
  return (
    <div className="App">
      {/* <MyFirstComponent/> */}
      {/* <MySecondComponent/> */}
      {/* <Standard/> */}
      {/* <MyFooter/> */}
      {/* <Parent/> */}
      {/* <PropWithDifferentTypes/> */}
      {/* <FirstContactCard/> */}
      {/* <EndContactCard/> */}
      {/* <Blog/> */}
      {/* <User/> */}
      {/* <Strap/> */}
      {/* <ClassClock/> */}
      {/* <ClockFunctional/> */}
      {/* <DifferentStates/> */}
      {/* <Counter/> */}
      {/* <UncontrolledInput/> */}
      {/* <ControlledInput/> */}
      <LetsSearch/>
    </div>
  );
}

//ONLY ONE DEFAULT EXPORT PER FILE
export default App;
