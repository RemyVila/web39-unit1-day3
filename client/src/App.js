import './App.css';
import React, { useEffect, useState } from 'react';


function getUrl(path) {
  return process.env.NODE_ENV !== 'development' ?
     path : `http://localhost/3000${path}`
}

function App() {
  const [message, setMessage] = useState('hello Web 39')
  useEffect(() => {
    fetch(
      getUrl('/api/hello')
    )
    .then(res => res.json())
    .then(data => setMessage(data.message));
  }, [])
  return (
    <div className="App">
      <header className="App=header">
        {message}
      </header>
    </div>
  );
}

export default App;

