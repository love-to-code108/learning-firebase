import { useState } from "react";

export const ColorChange = () => {

    const [textColor , settextColor] = useState("red");


    return(
        <div>
            <br />
            <br />
            <button onClick={() => {
                settextColor(textColor === "red" ? "black" : "red");
            }}>Click to Change color</button>


            <h1 style={{color: textColor}}>Hello World I want To change the color of this Text</h1>
        </div>
    );
}