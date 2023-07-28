import { useState } from "react";


// this is my try

// bad programming does not work well

/*

export const Hider = () => {
    
    let counter = true;
    const [checker, setChecker] = useState("");

    const hideUnhide = () =>{

        if(counter){

            counter = false;
            return setChecker("Hello there this text is being unhidden");

        }else{

            counter = true;
            return setChecker("hi");
            
        }
    }

 

    return(
        <div>
            <button onClick={hideUnhide}>Click to Hide/Unhide</button>
            <h1>{checker}</h1>
        </div>
    );
}

*/

// this is my teachers try

export const Hider = () => {
    
    const [textDisplay , setDisplay] = useState(true);

    

    return(
        <div>
            <button onClick={
                () => {
                    setDisplay(!textDisplay);
                }
            }>Click to Hide/Unhide</button>
            {textDisplay && <h1>Hello there this text is being unhidden</h1>}
        </div>
    );
}
    
