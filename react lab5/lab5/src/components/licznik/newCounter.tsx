import { useState } from "react";
import AddButton from "./addButton";


function NewCounter() {
    const [count, setCount] = useState(0);

    const add = ()=>{setCount(count + 1)};


    return (
        <div>
            <h1>{count}</h1>
            <AddButton addCounter={add}/>

           
        </div>
    );



}


export default NewCounter;