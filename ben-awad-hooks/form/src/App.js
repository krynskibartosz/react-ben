import React from 'react';
import useForm  from "./useForm";


const App = () => {
  //! On utilise le useForm hook qui vien du composant useForm.jsx
  // ainsi on peut récuperer toute la logique de la récupération des valeurs des inputs dans un seul hooks
  const [values, handleChange] = useForm({email: '', password: ''});

  return (
    <>
      <input name='email' value={values.email} onChange={handleChange}/>
      <input name='password' type='password' value={values.password} onChange={handleChange}/>
    </>
  );
}

export default App;
export {useForm}