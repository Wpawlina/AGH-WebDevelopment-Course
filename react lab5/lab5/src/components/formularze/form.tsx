import {useState } from "react";


function Form(){
    const [text, setText] = useState<string>("");

    return(
        <div>
            <input  onChange={(event)=>{setText(event.target.value)}}  type="text" value={text}/>
            <div>{text}</div>
        </div>
    )



}

export default Form;