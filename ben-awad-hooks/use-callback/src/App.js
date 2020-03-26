import React, { useState, useCallback } from "react";
import { Hello } from "./Hello";
import { Square } from './Square'

const App = () => {
    const [count, setCount] = useState(0);
    const nbr = [1,5,7];
    const increment = useCallback(n => {
        setCount(c => c + n);
    }, [setCount])
    return(
        <div>
        <Hello increment={increment}/>
        <div>count : {count}</div>
        {nbr.map(n => {
            return(
                <Square n={n} key={n}/>
            )
        })}
        </div>
    );
};

export default App