import {useEffect, useState } from "react";
	
export const useFetch = url => {
    const [state, setState] = useState({ data: null, loading: true});
    useEffect(() => {
        setState(state => ({data : state.data, loading: true}));
        //? Ici ont est obliger d'utiliser une IIFE(Immediately Invoked Function Expression)
        //! C/ nous somme dans un useEffect Hooks.
        (async () => {
            let res = await fetch(url);
            let value = await res.text();
            setState({ data: value, loading: false });
        })();
        }, [url, setState]);
    return state;
}


// On aurai pu le faire avec des callbaks comme sa

/*
import {useEffect, useState } from "react";

export const useFetch = url => {
const [state, setState] = useState({ data: null, loading: true});

useEffect(() => {
    setState({data: null, loading: true});
    fetch(url)
    .then(x => x.text())
    .then(y => {
        setState({ data: y, loading: false });
    });

    }, [url]);

    return state;
}
*/