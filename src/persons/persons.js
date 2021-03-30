
import React, { useState } from 'react';
import Person from '../person/person.js';
import './persons.css';


// const Persons=(props)=>{

//    const [this.state,swichstate]=useState({
//         persons:[
//          {name:"sai1",age:26},
//          {name:"sai2",age:27},
//        {name:"sai3",age:28},
                    
//           ],
         
//     })

//     const [extraprop,changedextraprop]=useState({
//         msg:"this is start"
//     })

// const updatestate=()=>{

//     swichstate({
//                     persons:[
//                         {name:"saia", age:22},
//                         {name:"saib", age:23},
//                         {name:"saic", age:24},
//                     ],

//                 });

//    changedextraprop({
//          msg:"this is start2"
    
//         });
// }


    
  

// return (<div className = "persons" >
  
//            <button onClick={updatestate} >switch names</button>
//          <Person  name={this.state.persons[0].name} age={this.state.persons[1].age} />
//          <Person name={this.state.persons[1].name} age={this.state.persons[2].age} />
//          <Person textclick={updatestate} name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       {extraprop.msg}
//          </div>);


// }
// export default Persons;

class Persons extends React.Component{
    state={
        persons:[
            { id:"a1",name:"sai1",age:26},
            {id:"a2",name:"sai2",age:27},
            {id:"a3",name:"sai3",age:28},
        
        ],
        showpersons:false,
    }

    //  updatestate=(newname)=>{
    //     this.setState({
    //         persons:[
    //             {name:"saia",age:22},
    //             {name:newname,age:27},
    //             {name:"saic",age:24},
    //         ]
    //     })
    // }

    // inputhandler1=(event)=>{
    //     this.setState({
    //         persons:[
    //        {name:event.target.value,age:26},
    //         {name:"sai2",age:27},
    //         {name:"sai3",age:28},
    //         ],
    //     })

    // }
    inputhandler=(event,personid)=>{
        let personindex=this.state.persons.findIndex(p=>{
            return p.id===personid
        });

       let personscopy=[...this.state.persons];
     let personcopy= personscopy[personindex];
     personcopy.name=event.target.value;
     this.setState({persons:personscopy});



    }

    deletpersonhandler=(personindex)=>{
  const copy = [...this.state.persons];
  copy.splice(personindex,1);
        this.setState({
            persons : copy
        });

    }

         togglepersons=()=>{
            this.setState({
               showpersons:!this.state.showpersons
            });
        }
    

   render(){
    let personslist="clickthe button";
if((this.state.showpersons)){
    personslist= (

        <div>
           { this.state.persons.map((item,index)=>{
              return <Person   
                  name={item.name}
                  age={item.age}
                  key={item.id}
          userinput={(event)=>{this.inputhandler(event,item.id)}}
                  textclick={()=>this.deletpersonhandler(index)}
               />
           })}
        </div>  
        
    )
};

      return (<div className = "persons">

          {/* <button onClick={this.updatestate.bind(this,"ohm")} >switch names</button> */}
          <br/>
          <button onClick={this.togglepersons} >showresult</button>
      <br/>
        {personslist}
    
         
         </div>);
};
}

 export default Persons;