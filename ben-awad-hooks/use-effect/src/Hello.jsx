import React, { useEffect } from 'react';

const Hello = () => {
    useEffect(() => {
    console.log("componentWillUnMount");
    return () => {
      console.log("unMount");
    };
  }, []);

    return <div>Hello</div> 
}

export default Hello