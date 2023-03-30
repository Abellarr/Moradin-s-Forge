import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";
import './App.css'

function App() {
  let weaps = fetch('https://api.open5e.com/weapons/').then(response => response.json());
  let arm = fetch('https://api.open5e.com/armor/').then(response => response.json());
  let magItems = fetch('https://api.open5e.com/magicitems/').then(response => response.json());
  const [display, setDisplay] = useState("");
  const [weapons, setWeapons] = useState(weaps);
  const [armor, setArmor] = useState(arm);
  const [magicItems, setMagItems] = useState(magItems);

  return (
    <div className="App">
      <Header
        display={display}
        setDisplay={setDisplay}
      />
      <Container 
        display={display}
        weapons={weapons}
        armor={armor}
        magicItems={magicItems} 
      />
    </div>
  )
}

export default App
