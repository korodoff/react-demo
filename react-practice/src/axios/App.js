import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// npx subset of npm

export function App() {
  const [user, setUser] = useState([]);
  const [counters, setCounter] = useState(0);
  // when a value of useState changes it rerenders the page

  console.log('render 🌱');

  useEffect(() => {
    axios.get('https://api.github.com/users')// Json--->Object
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

      const dataa={
        name: "paul rudd",
      movies: ["I Love You Man", "Role Models"]
    }

      axios.post('https://reqres.in/api/users',dataa)
      .then((response)=>{
          console.log(response);
      }).catch((err)=>{console.log(err) })


  }, [])

  // fetch_data()
  console.log(user);

  const counter = () => {
    setCounter(counters + 1)
  }

  return (
    <div className="App">
      <h1>Hi Future full stack web developers 🌱</h1>
      <li> Axios ✅</li>
      <li> Babel ✅</li>
      <li> Web pack ✅</li>
      <h1>Counter {counters}</h1>


      <button onClick={counter}>Click me  </button>

<div className="cards">
  {user.map((val) => {
        return (
          <div className="card">
        <img src={val.avatar_url} alt="Avatar" height={'300px'} />
          <div className="container">
            <h4><b>{val.login}</b></h4>
            <p>Architect & Engineer</p>
          </div>
      </div>
        ) 
      })
      }
</div>
      


      {/*  */}


    </div>
  );
}


