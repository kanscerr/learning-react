import Greeting from "./greeting";
import { useContext, useState } from 'react';
import { nameContext } from "./context";

const Button = () => {
    const [name, setName] = useState();
    const {input} = useContext(nameContext);
    return(
        <div className="button">
            {/* {input} */}
            <button onClick={()=> setName(input)}>Greet!</button>
            <Greeting/>
        </div>
    )
}

export default Button;