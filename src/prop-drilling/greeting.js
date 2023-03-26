import { useContext } from "react";
import { nameContext } from "./context";

const Greeting = () => {
    const {input} = useContext(nameContext);
    return(
        <div className="greeting-box">
            <h1>Hello, {input}</h1>
        </div>
    )
}

export default Greeting;