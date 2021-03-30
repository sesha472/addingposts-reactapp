 import './App.css';

 import React from 'react';
 import Blog from './Blog/Blog';

// import Persons from './persons/persons.js';

function App() {
  return (
    <div className="App">
      <h1 style={{color:"blue" ,boxShadow:"1px 10px 32px black",width:"50%" ,marginLeft:"25%" }}> sesha's project</h1>
     {/* <Persons/> */}
     <Blog/>
    </div>
  );
}

export default App;
