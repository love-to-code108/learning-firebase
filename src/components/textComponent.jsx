import { useState } from "react";


export const TextInput = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) =>{
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    return(
        <div>
            <input type="text" placeholder="Hello" onChange={handleInputChange}/>
            <br />
            <br />
            {inputValue}
        </div>
    );
}