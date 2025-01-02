import { useState,useEffect} from 'react';

function CounterLS() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        
        if(localStorage.getItem('count')===null){
            console.log('null');
            localStorage.setItem('count', '0');
            return;
        }
        setCount(parseInt(localStorage.getItem('count')!));
       
    },[]);

    const increment = () => {
        setCount(count + 1);
        localStorage.setItem('count', (count + 1).toString());
    }
   

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Dodaj</button>
        </div>
    );


}

export default CounterLS;