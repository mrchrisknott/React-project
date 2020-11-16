import React from "react";
import './Name.css';
const Name = (props) => {
    const style = {
        backgroundColor: 'blue'
    };
    
    return (
        <div className="Name" style={style}>
             <p>My name is {props.name}.</p>
             <p>My name is {props.name} and my favourite colour is {props.children}</p>
         </div>
   )
}
export default Name;