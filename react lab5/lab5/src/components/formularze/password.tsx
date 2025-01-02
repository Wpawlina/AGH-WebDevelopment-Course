import {useRef,useState} from "react";


function Password(){

    const password = useRef<HTMLInputElement>(null);
    const password2 = useRef<HTMLInputElement>(null);
    const [text, setText] = useState<string>("Prosze wprowadzić hasło");


    const checkPassword = ():void=>{
        if(!password.current || !password2.current){
            setText("Prosze wprowadzić hasło")
        }
        else if(password.current.value === password2.current.value){
            setText("")
        }
        else{
            setText("Hasła nie są zgodne")
        }
        


    }




    return (
        <div>
            <div><label>Hasło:</label>  <input onChange={checkPassword} ref={password} type="text" /></div>
            
            <div>  <label>Powtórz hasło:</label> <input onChange={checkPassword} ref={password2} type="text" /> </div>
          
            <div>{text} </div>

        </div>
    )
}

export default Password;