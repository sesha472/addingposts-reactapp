import React from 'react'

export default function Useroutput(props) {
  const show={
        backgroundColor:"red",
        width:"50%",
        margin:"auto",
        boxShadow:"10px 20px 30px black",
        borderRadius:"10px",
    }
    return (
        <div style={show}>
            <p >username : <span style={{color:"white"}} >{props.username}</span></p>
            <p>this is para 2</p>
            
        </div>
    )
}
