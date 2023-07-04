import React from "react";


function Users() {

    function Apple()
    {
        return(<div>Apple Component</div>)
    }
    return (
      <div className="App">
       <h1>Hello users 1</h1>
       {Apple()}
      </div>
    );
  }
  
  export default Users;
  