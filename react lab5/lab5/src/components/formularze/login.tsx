import  { useRef } from 'react';

function Login(){

    const password = useRef<HTMLInputElement>(null);
    const password2 = useRef<HTMLInputElement>(null);
    const login = useRef<HTMLInputElement>(null);
    const button = useRef<HTMLButtonElement>(null);
  


    const checkForm = ():void=>{
        const passwordValue = password.current?.value || "";
        const password2Value = password2.current?.value || "";
        const loginValue = login.current?.value || "";
    
        if (!loginValue || !passwordValue || !password2Value) {
          if (button.current) button.current.disabled = true;
        } else if (passwordValue !== password2Value) {
          if (button.current) button.current.disabled = false;
          alert("Hasła nie są zgodne");
        } else {
          if (button.current) button.current.disabled = false;
          alert("Zalogowano poprawnie");
        }
        


    }




    return (
        <div>
            <div><label>Login:</label>  <input onChange={checkForm} ref={login} type="text" /></div>

            <div><label>Hasło:</label>  <input onChange={checkForm} ref={password} type="text" /></div>
            
            <div>  <label>Powtórz hasło:</label> <input onChange={checkForm} ref={password2} type="text" /> </div>

            <button ref={button} disabled>Zaloguj</button>
          
            

        </div>
    )

}


export default Login;