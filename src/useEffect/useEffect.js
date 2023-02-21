// import { useEffect } from "react"

import { useState, useEffect } from "react";

const UseEffect = () => {
    let[display, changeDisplay] = useState('none ');
    let[text, changeText] = useState();
    const showDiv = () =>{
        if(display==='none'){
            display = 'block';
        }
        else{
            display = 'none';
        }
        changeDisplay(display);
    }

    const writeText = (e) =>{
        changeText(e);
    }

    useEffect(() => {
        //component mount
        console.log("mounting");
        //component unmount
        return () => {
            console.log("unmounting");
        }
    }, [display]); //for the dependency on which hook is required

    return(
        <div className="useEffect">
            <h1>UseEffect</h1>
            <button onClick={ showDiv }>Show</button>
            <div className="hiddenDiv" style={{display: display}}>
                <input onChange={ (event) => writeText(event.target.value) }></input>
                <div className="showText">
                    <h2>{ text }</h2>
                </div>
            </div>
        </div>
    )
}

export default UseEffect;