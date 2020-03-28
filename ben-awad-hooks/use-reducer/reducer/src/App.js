import React, { useReducer, useState } from 'react';


const reducer = (state, action) => {
  switch(action.type){
    case 'add-todo':
      return { todos: [...state.todos, {text: action.text, completed: false}], todoCount: state.todoCount + 1}

    case 'toggle-todo':
      return { todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed: !t.completed} : t), todoCount: state.todoCount};
  
    default:
      return state;
  }
}

const App = () => {

  const [{todos, todoCount}, dispatch] = useReducer(reducer, { todos: [], todoCount : 0});
  const [text, setText] = useState();

  return(
    <div>
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({type: 'add-todo', text})
      setText("")
    }}>
    <div>number of todos: {todoCount}</div>
      <input value={text} onChange={e => setText(e.target.value)}/>
    </form>
      {todos.map((t, idx) => <div style={{ textDecoration : t.completed ? "line-through": ""}} onClick={() => dispatch({type: 'toggle-todo', idx})} key={t.text}>{t.text}</div>)}
    </div>
  );
};

export default App;
