// import React, { Component } from 'react';

// class fetchComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0,

//         }
//     }

//     componentDidMount() {
//        console.log("component did mount")
//         // this.fetchWithPeomise();
//         this.fetchWithAsyncAwait();
//     }
//     fetchWithPeomise = () => {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//          .then((response)=>{
//             response.json().then((jsonResponse)=>{
//                 console.log("Json Response",jsonResponse);
//                 this.setState({
//                     loader: false,
//                     data: jsonResponse,
//                 });
//             });
//          })
//          .catch((e)=> console.log(e));
//     }

// fetchWithAsyncAwait = () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         console.log("response", response)
//         const jsonResponse = await response.json();
//         console.log("json Response", jsonResponse)
//         this.setState({
//             loader: false,
//             data: <JSONRES></JSONRES>
//         })
//     }
// }

//     componentDidUpdate(prevProps, prevState) {

//     }

//     componentDidUnmount() {

//     }

//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// export default fetchComponent;
