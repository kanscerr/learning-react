import { useState } from 'react';

const Colorize = () =>{
    const[color, setColor] = useState();
    const changeColor = () => {
        //basic hex-
        // let color = `#${Math.floor(Math.random()*16777216)}`;

        //rgb-
        // let r = Math.floor(Math.random()*256);
        // let g = Math.floor(Math.random()*256);
        // let b = Math.floor(Math.random()*256);
        // let color = `rgb(${r},${g},${b})`;
        
        //proper hex (youtube)-
        // let hex = `#${Math.floor(Math.random()*16777216).toString(16)}`;

        //proper hex (my code)-
        let character = '0123456789ABCDEF';
        let hex='#';
        for(let i=0;i<6;i++){
            hex += character.charAt(Math.floor(Math.random()*character.length));
        }
        console.log(hex);
        setColor(hex);
    }
    return(
        <div className="colorize">
            <div className="box" style={{backgroundColor: color}}></div>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default Colorize;