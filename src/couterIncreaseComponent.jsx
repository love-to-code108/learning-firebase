import {useState} from "react";




export const Counter = () => {


    const [age, setAge] = useState(0);

    

    const increaseAge= () => {
            setAge(age + 5);
    }



    return (
        <div>
            <h1>{age}</h1>
            <button onClick={increaseAge}>CLICK TO INCREASE</button>
        </div>

    );
}

