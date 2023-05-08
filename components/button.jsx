import React from "react";
import { useState } from "react";

export const Counter = () => {
    const [value, setValue] = useState(0);
    function increament(){
        setValue( value + 1 )
    }
    

    function decreament(){
        setValue(value-1)
    }
    function reset(){
        setValue( 0)
    }

    return (
       <div>
         <p>Counter: {value}</p>
         <button onClick={increament}>increament</button>
         <button onClick={decreament}>decreament</button>
         <button onClick={reset}>reset</button>





       </div>



    )
}