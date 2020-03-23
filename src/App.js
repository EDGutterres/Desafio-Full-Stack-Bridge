import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(null);
  const [value, setValue] = useState('');
  

  function handleSubmit(e) {
    e.preventDefault();
    const data = { divList: value, isPrime: value};
    
    fetch('/calculate', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => console.log("kk" + res));
  }

  function handleValue(e) {
    setValue(e.target.value);
  }
  return (
    <section id="app">
      <form action="" onSubmit={handleSubmit}>
        <input type="number" onChange={handleValue} />
        <button> submit </button>
      </form>
    </section>
  );
}
export default App;