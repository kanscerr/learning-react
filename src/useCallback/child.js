import { useState } from 'react';

const Child = () => {
    const [name, setName] = useState();
    const updateName = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    return(
        <div className="child">
            <input type="text" placeholder="Enter your name" onChange={ (e)=>updateName(e) }/>
            <h3>{name}</h3>
        </div>
    )
}

export default Child;