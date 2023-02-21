import Child from "./child";
import { useState } from 'react';

const Memoization = () => {
    const[count, setCount] = useState(0);
    const updateCount = () => {
        setCount((prev)=>prev+1);
    }
    console.log("re-rendering parent");
    return(
        <div className="parent">
            <div className="parent-component">
                <button onClick={updateCount}>Click Me!</button>
                <h4>Button clicked {count} times!</h4>
                <Child/>
            </div>
            
        </div>
    )
}

export default Memoization;