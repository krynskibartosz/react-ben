import React, { useState, useRef} from 'react';
import useForm  from "./useForm";
import {useMeasure} from './useMeasure'
// import {useFetch} from './useFetch.jsx';
import Hello from "./Hello"

const App = () => {
  //! On utilise le useForm hook qui vien du composant useForm.jsx
  // ainsi on peut récuperer toute la logique de la récupération des valeurs des inputs dans un seul hooks
  const [values, handleChange] = useForm({email: '', password: '', firstName:''});
  const inputRef = useRef();
  const hello = useRef(() => console.log('hello'));
  const [showHello, setShowHello] = useState(true)

  const [rect, inputRef2] = useMeasure([]);

  // useLayoutEffect(() => {
  //     // ! "getBoundingClientRect" => cette méthode nous donne la dimensions de l'élement
  //     console.log(inputRef.current.getBoundingClientRect());
      
  //   return () => {
      
  //   };
  // }, [])


  return (
    <main>
    <>
    <button onClick={() => setShowHello(!showHello)}>toggle</button>
    {showHello && <Hello/>}
      <input ref={inputRef} name='email' value={values.email} onChange={handleChange}/>
      <input ref={inputRef2} name='firstName' value={values.firstName} onChange={handleChange}/>
      <input name='password' type='password' value={values.password} onChange={handleChange}/>
      <button onClick={() => 
      {inputRef.current.focus()
      hello.current()}
      }>Click</button>
      </>
    </main>
  );
}

export default App;