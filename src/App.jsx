import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";
import './App.css'

function App() {
  let weaps = fetch('https://api.open5e.com/weapons/').then(response => response.json());
  let arm = fetch('https://api.open5e.com/armor/').then(response => response.json());
  let magItems = fetch('https://api.open5e.com/magicitems/').then(response => response.json());
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  )
}

export default App
