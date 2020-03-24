import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch'

const Hello = () => {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const {data, loading} = useFetch(`http://numbersapi.com/${count ? count : 0}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const renders = useRef(0);

  // console.log(`Hello ${renders.current++}`)

    return <div>
        <blockquote>
      {loading ? "loading..." : data}
    </blockquote>
    <p>count : {count}</p>
    <button onClick={() => setCount(c => c + 1)}>Incrémente</button>
    </div> 
}

export default Hello