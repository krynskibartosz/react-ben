import React, { useEffect } from 'react';
import useForm  from "./useForm";
// import Hello from "./Hello"


const App = () => {
  //! On utilise le useForm hook qui vien du composant useForm.jsx
  // ainsi on peut récuperer toute la logique de la récupération des valeurs des inputs dans un seul hooks
  const [values, handleChange] = useForm({email: '', password: '', firstName:''});
  // const [showHello, setShowHello] = useState(true);
  useEffect(() => {
  const onMouseMove = e => {
    console.log(e);
  };
  window.addEventListener('mousemove', onMouseMove);

    return (onMouseMouve) => {
      window.removeEventListener("mousemove", onMouseMouve);
    };
  }, []);

  return (
    <div>
    <>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello/>} */}
      <input name='email' value={values.email} onChange={handleChange}/>
      <input name='firstName' value={values.firstName} onChange={handleChange}/>
      <input name='password' type='password' value={values.password} onChange={handleChange}/>
      </>
    </div>
  );
}

export default App;