import {useState} from 'react';

const useForm = initialValues => {
    // On passe initialValues === {email : "", password : ""} comme props pour le transmette au composant
    const [values, setValues] = useState(initialValues);
    // On retourne donc un tableau qui contiendra la valeurs intial, et la méthode qui récupèrera la valeur de l'input
    return [values, e => setValues({...values, [e.target.name] : e.target.value})];
};

export default useForm
