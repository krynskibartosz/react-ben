import React, { useState } from 'react';
import './App.css';


const App = () => {
  //! On peut déstructurer comme sa pour avoir moin de lignes de code
  // const [{count, count2}, setCount] = useState({count : 10, count2 : 20});
  // <button onClick={() => setCount(currentState => ({
  //   ...currentState,
  //   count: currentState.count + 1,
  //   })
  //    )}>
        // +
  // </button>
  //  <p>{count}</p>
  //  <p>{count2}</p>

  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20)
  return <div>
  {/* On peut aussi renvoyer un function pour récuper le set.. en paramètre de la function */}
    <button onClick={() => { setCount(c => c + 1); setCount2(c => c +1)}}>
      +
    </button>
    <p>{count}</p>
    <p>{count2}</p>
  </div>
}

export default App;
