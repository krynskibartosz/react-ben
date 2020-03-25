import React, { useState, useEffect} from 'react';
import { useFetch } from './useFetch'
import { useMeasure } from './useMeasure';

const Hello = () => {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const {data, loading} = useFetch(`http://numbersapi.com/${count ? count : 0}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const [rect, divRef] = useMeasure([data]);

    return <div style={{display: 'flex;'}}>
    <blockquote ref={divRef} style={{display: "flex"}}>
      {loading ? "loading..." : data}
    </blockquote>
    <pre>
      {JSON.stringify(rect, null, 2)}
    </pre>
    <p>count : {count}</p>
    <button onClick={() => setCount(c => c + 1)}>Incrémente</button>
    </div> 
}

export default Hello