import { useState,useEffect } from "react";


function Title(){
    const [title,setTitle] = useState<string>("");

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <input type="text" onChange={(event)=>{setTitle(event.target.value)}}></input>
        </div>
    );
}

export default Title;