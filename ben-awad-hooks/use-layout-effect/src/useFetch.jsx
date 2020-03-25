import {useEffect, useState, useRef } from "react";
	
export const useFetch = url => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({ data: null, loading: true});

    useEffect(() => {
        return () => {
            // ! call when the component is going to unmount
            isCurrent.current = false
        }
    }, [])

    useEffect(() => {
        setState(state => ({data : state.data, loading: true}));
        //? Ici ont est obliger d'utiliser une IIFE(Immediately Invoked Function Expression)
        //! C/ nous somme dans un useEffect Hooks.
        (async () => {
            let res = await fetch(url);
            let value = await res.text();
                    isCurrent.current && setState({ data: value, loading: false });                
        })();
        }, [url, setState]);
    return state;
}