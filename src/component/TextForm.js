//import React from 'react'
import React, { useState } from 'react';


//console.log(useState('Enter text here2'))

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked" );
        let newText = text.toUpperCase()
        setText(newText);
    }
    const handleOnClick = (event)=>{
        console.log("UpperCase was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    //setText("new text")
  return (
    <>
 <div>
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handleOnClick} id="myBox" rows="9"></textarea>
</div>
<button className="btn btn-success" onClick={handleUpClick}>Convert to UpperCase</button>
</div>
<div className="container" >
    <div className="my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} Words, {text.length} characters </p>
    <p>{0.008*text.split(" ").length}characters </p>
    <h2>preview</h2>
    <p>{text}</p>
    </div>
</div>

</>
  )
}
