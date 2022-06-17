// import "./component/handsOn1/style.css"
// import './App.css';
// import FunctionComponent from "./component/handsOn1/functionComponent";
// import React, {useState} from "react";
// import ClassComponent from "./component/handsOn1/classComponent";
import "./component/handsOn2/hs2style.css"

import FormFucntion from "./component/handsOn2/formFunction";
// import MainForm from "./component/handsOn2/mainform";




function App() {
  
  // const [show, setShow] = useState(false)
  // const[showSecond, setShowSecond] = useState(false)


  return (
    <div className="App">
      {/* <h3>styling using functional and class component</h3>
      <div className="flex">
        
         <div className="both" onClick={()=>setShow(!show)}>to style using function component</div>
         <div className='class both' onClick={()=>setShowSecond(!showSecond) }>to see style usnig class component</div>
      </div>
      <div>

        <div className="functiontoggle">
          {
            show?<div className="togglefirst">
              <FunctionComponent/>  
            </div>:null  }
            
            {
            showSecond?<div className="togglefirst">
              <ClassComponent/>
            </div>:null  }
        </div>       
      </div> */}

      {/* <MainForm/> */}
      <FormFucntion/>
      
     
    </div>
  );
    
}

export default App;
