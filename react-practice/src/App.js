// import Message from './component/day1/message.jsx'
// // import States from './component/day2/state.jsx';
// import States, {mySg} from "./component/day2/state.jsx";
// import StateClass from './component/day2/stateClass.jsx';
// import StyleComponent from './component/day3/style.jsx';
// import ReactProps from './component/day3/props.jsx';
// import Card from './component/day3/card.jsx';
// import CounterComp from './component/day3/counterComp.jsx';
// import ConditionalRendering from './component/day3/conditionalRendering.jsx';
// import { useState } from 'react';
// import lifeCycleComponent from './component/day4/lifeCyclemethod';
import{BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Home from "./component/day5/home";
import AboutUs from "./component/day5/aboutUs";
import Contact from "./component/day5/contact";
import NotFound from "./component/day5/notFound";
import NavagationBar from "./component/day5/navagationBar";
import RoutingParams from "./component/day6/routingParams";
import SearchParams from "./component/day6/searchParams";
// import { useState } from 'react';
// import LifeCycleMethods from './component/day4/lifeCyclemethod';

function App() {
  // const fruits = ["apple","banana","orange"]
  // const people = [
  //   {kyrteng:"kjrut", description:"asian",season: "idk"},
  //   {kyrteng:"thoi", description:"american",season: "idk"},
  //   {kyrteng:"manso", description:"african",season: "idk"}

  // ]
  // const [counters, setCounters] = useState([10, 20, 30]);
  // const handleClick = (index) => {
  //   const copyCounter = [...counters];
  //   copyCounter[index] = copyCounter[index] + 10;
  //   setCounters(copyCounter);
  // };

  // const [lifeCycleComponent , setLifeCycleComponent] = useState(true)
  return (
    <div className="App">
     {/* <h1>HEllO Welcome to react</h1>
     <Message />  */}
      {/* component can be reuseable in react */}
      {/* {mySg} */}
      {/* <States/>
      <StateClass/>
      <StyleComponent/> */}
      
      {/* {fruits.map((fruitsObj)=>(
        <ReactProps name={fruitsObj.name} />
      ))} */}

     {/* <div style = {{display: "flex", justifyContent: "space-evenly",flexWrap: "wrap"}}>
      {people.map((personObj)=>{
        const {kyrteng,description,season} = personObj;
        return <Card kyrteng = {kyrteng} description = {description} season = {season}/>
      })}
      
      </div> 

      {counters.map((counter, i) => (
        <CounterComp value={counter} handleClick={handleClick} index={i} />
      ))}
      <ConditionalRendering /> */}

      {/* {
        lifeCycleComponent? <LifeCycleMethods/> : null
      }
      <button onClick={() => setLifeCycleComponent(!lifeCycleComponent)}>
        show/hide LifeCycle Component
        </button>      
       */}

       <BrowserRouter>
       <NavagationBar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/electronic/:appliance" element={<RoutingParams/>}/>
        <Route path="/cars" element={<SearchParams/>}/>

        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
