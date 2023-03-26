//I HAVE NO CLUE HOW OR WHERE TO USE USECALLBACK OR USEMEMO


import { useState } from 'react';

const Parent = () =>{
    const [count, setCount] = useState(0);
    const [background, setBackground] = useState('#FFFFFF');
    const changeBackground = () =>{
        (background==='#FFFFFF') ? setBackground('#000000') : setBackground('#FFFFFF');
    }
    const changeCount = () => {
        setCount((prev)=> prev+1);
    }
    return(
        <div className="parent" style={{backgroundColor: background}}>
            <button onClick={ changeBackground }>Change Background</button>
            <button onClick={ changeCount }>Click me!</button>
            <h5>Total Click: { count }</h5>
        </div>
    )
}

export default Parent;