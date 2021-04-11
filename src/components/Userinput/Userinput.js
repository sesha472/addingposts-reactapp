import React from 'react'

export default function Userinput(props) {
    return (
        <div>
            <input type="text"
             onChange={props.change} 
            value={props.username}  />
        </div>
    )
}
