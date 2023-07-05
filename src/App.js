
import React from 'react';
import './App.css';
import Todo from "./component/todo";
const App = () => {
  return(
    <>
      <h1 style={{textAlign:"center"}}>Welcome to React App</h1>
      <Todo/>
      
    </>
  )
}

// import Users from './Users'
// import Class from './Class';
// import New from './New'

/*function App() {
  let data= "Rudra Singh";
  function sachin()
  {
    alert(data);
  }
  return (
    <div className="App">
    <h1>{data}</h1>
    <button on onClick={sachin}>Click Me</button>
     <Users />
    <Class /> 
    </div>
  );
} */

//Here We use JSx
// function App(){
//   return(
//     <div className="App">
//       <h1>JSX!</h1>
//       <New />
//     </div>
//   );
// } 

// State in react 
// function App(){
//   let data = "Rudra";
//   function updatedata()
//   {
//     data="Singh";
//     alert(data)
//   }
//   return(
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updatedata}>Update data</button>
//     </div>
//   );
// }

export default App;
