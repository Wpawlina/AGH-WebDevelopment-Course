import { useState,useEffect,useRef } from "react";


function Countdown(){
    const [countdown,setCountdown] = useState<number>(15);
    const button=useRef<HTMLButtonElement>(null);
    const [started,setStarted]=useState<boolean>(false);
    const [intervalId,setIntervalId]=useState<number>(0);


    const toggleCountdown = () => {
        if(started){
            setStarted(false);
            button.current!.innerText="Start";
        }
        else{
            setStarted(true);
            button.current!.innerText="Stop";
        }
    }

    useEffect(() => {
       if(started){
            const interval = setTimeout(() => {
            setCountdown((Math.round((countdown - 0.1)*10)/10));
            }, 100);

            setIntervalId(interval);
            if (countdown === 0.1) {
               clearTimeout(intervalId);
               setStarted(false);
               button.current!.innerText="Odliczanie zakończone";
               button.current!.disabled=true;
            }

       }
        return () =>{ if(intervalId) clearTimeout(intervalId) };
    }, [countdown,started]);

    return (
        <div>
            <h1>{countdown}</h1>
            <div><button ref={button} onClick={toggleCountdown}>Start</button></div>
            
        </div>
    );

}

export default Countdown;