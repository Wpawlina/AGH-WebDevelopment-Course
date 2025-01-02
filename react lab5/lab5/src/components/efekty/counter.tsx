import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`${count-1} zwiekszył sie do ${count}`);
    }, [count]);


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Dodaj</button>
        </div>
    );


}

export default Counter;