import { useState } from 'react';
import Button from './button';
import { nameContext } from './context';

const Name = () => {
    let [input, setInput] = useState();
    const updateGreeting = (input) => {
        setInput(input);
    }
    return(
        <div className='main'>
            <input onChange={ (e) => updateGreeting(e.target.value) } type="text" placeholder="Enter name"></input>
            <nameContext.Provider value={{input, setInput}}>
                <Button/>
            </nameContext.Provider>
        </div>
    )
}

export default Name;