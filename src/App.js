import './App.css';
import { React, useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState('');

  useEffect(() => {
    fetch('/api/message/testId')
      .then((resp) => resp.json())
      .then((value) => setState(JSON.stringify(value)))
      .catch((err) => console.error(err));
  }, [])

  return (
    <div className="App">
      {state}
    </div>
  );
}

export default App;
