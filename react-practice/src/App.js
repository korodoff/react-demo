import Message from './component/day1/message.jsx'
// import States from './component/day2/state.jsx';
import mySg, { States } from "./components/day2/state.jsx";
import StateClass from './component/day2/stateClass.jsx';


import './App.css';

function App() {
  return (
    <div className="App">
     <h1>HEllO Welcome to react</h1>
     <Message /> 
      {/* component can be reuseable in react */}
      {mySg}
      <States/>
      <StateClass/>
      
    </div>
  );
}

export default App;
