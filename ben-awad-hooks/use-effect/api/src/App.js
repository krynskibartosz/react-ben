import React, { useState, useEffect } from 'react';
import useForm  from "./useForm";
import {useFetch} from './useFetch';
// import Hello from "./Hello"

const App = () => {
  //! On utilise le useForm hook qui vien du composant useForm.jsx
  // ainsi on peut récuperer toute la logique de la récupération des valeurs des inputs dans un seul hooks
  const [values, handleChange] = useForm({email: '', password: '', firstName:''});
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  const {data, loading} = useFetch(`http://numbersapi.com/${count ? count : 0}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <main>
    <blockquote>
      {loading ? "loading..." : data}
    </blockquote>
    <p>count : {count}</p>
    <button onClick={() => setCount(c => c + 1)}>Incrémente</button>
    <>
      <input name='email' value={values.email} onChange={handleChange}/>
      <input name='firstName' value={values.firstName} onChange={handleChange}/>
      <input name='password' type='password' value={values.password} onChange={handleChange}/>
      </>
    </main>
  );
}

export default App;