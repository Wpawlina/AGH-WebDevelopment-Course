import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Dodaj</button>
        </div>
    );


}

export default Counter;