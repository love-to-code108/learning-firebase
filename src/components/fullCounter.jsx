import { useState } from "react";


export const FullCounter = () => {


    const [counter, setCounter] = useState(0);

    
    return(
        <div>


            <button onClick={() => {
                setCounter(counter + 1);
            }}>Increase</button>


            <button onClick={() => {
                setCounter(counter - 1);
            }}>Decrease</button>


            <button onClick={() => {
                setCounter(0);
            }}>Set To Zero</button>

            <br />
            <br />
            
            {counter}


        </div>
    );
 
}




















