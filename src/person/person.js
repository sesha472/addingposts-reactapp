import React from 'react';
 
import './person.css';


const Person=(props) => {

    return (<div  className="person">
   <p onClick={props.textclick}> name = {props.name} , age = {props.age} </p>
  <input  type="text" onChange={props.userinput} ></input>
      
        </div>
        );

};

export default Person;