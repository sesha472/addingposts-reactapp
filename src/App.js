 import './App.css';

 import React,{useState} from 'react';
//  import Blog from './Blog/Blog';
import Persons from './persons/persons.js';

// import Userinput from './components/Userinput/Userinput';
// import Useroutput from './components/Useroutput/Useroutput';



function App() {
// const [username, setusername] = useState("sesha");
 
// let inputhandler=(e)=>{
//   setusername({username:e.target.value})
// }
  return (
    <div className="App">
      {/* <h1 style={{color:"blue" ,boxShadow:"1px 10px 32px black",width:"50%" ,marginLeft:"25%" }}> sesha's project</h1> */}
     <Persons/>
     {/* <Blog/>

      {/* <Userinput change={(e)=>setusername( e.target.value)} username={username}/>
     
      <Useroutput username={username} />
      <Useroutput username={username} />
      <Useroutput username="sai" />
       */}
      
     
    </div>
  );
}

export default App;
