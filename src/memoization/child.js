import { memo } from "react";

const Child = () =>{
    console.log("re-rendering child");
    return(
        <div className="child-component">
            <div className="box">
                <h4>This is new child component</h4>
            </div>
        </div>
    )
}

export default memo(Child);