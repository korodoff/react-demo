import Message from './component/day1/message.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>HEllo</h1>
     <Message /> 
     <Message />
      <Message /> 
      {/* component can be reuseable in react */}
    </div>
  );
}

export default App;
