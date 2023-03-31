import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";
import './App.css'

function App() {
  const [display, setDisplay] = useState("home");
  const [customItems, setCustomItems] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [armor, setArmor] = useState([]);
  const [magItems, setMagItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.open5e.com/weapons/');
      const weaps = await response.json();
      setWeapons(weaps.results);
      console.log(weaps.results);
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.open5e.com/armor/');
      const arm = await response.json();
      setArmor(arm.results);
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.open5e.com/magicitems/');
      const mag = await response.json();
      setMagItems(mag.results);
    })();
    return () => {};
  }, []);
    

  
  

  return (
    <div className="App">
      <Header
        display={display}
        setDisplay={setDisplay}
      />
      <Container 
        display={display}
        customItems={customItems}
        setCustomItems={setCustomItems}
        weapons={weapons}
        armor={armor}
        magItems={magItems}
      />
    </div>
  )
}

export default App;
