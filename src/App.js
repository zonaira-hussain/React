// import MyFirstComponent from './Components/01-intro/MyFirstComponent'
import MySecondComponent from './Components/01-intro/MySecondComponent'
import MyFooter from './Components/02-Parent-Child/MyFooter'
import Standard from './Components/02-Parent-Child/Standard'
import Parent from './Components/03-Props/01-Simple/Parent'
import PropWithDifferentTypes from './Components/03-Props/02-intermediate/PropWithDifferentTypes'

const App=()=> {
  return (
    <div className="App">
      {/* <MyFirstComponent/> */}
      {/* <MySecondComponent/> */}
      {/* <Standard/> */}
      {/* <MyFooter/> */}
      {/* <Parent/> */}
      <PropWithDifferentTypes/>
    </div>
  );
}

//ONLY ONE DEFAULT EXPORT PER FILE
export default App;
