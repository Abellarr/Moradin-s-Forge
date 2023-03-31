import React, { useState, useEffect } from 'react'
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";
import CustomContainer from "./components/CustomContainer.jsx";
import './App.css';

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
    })
    ();
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

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5050/api/items');
      const custom = await response.json();
      setCustomItems(custom);
    })();
    return () => {};
  }, [])
  

  
  

  return (
    <div className="App">
      <Header
        display={display}
        setDisplay={setDisplay}
      />
      {(display === "itemCreator") ?
        <CustomContainer
          display={display}
          customItems={customItems}
          setCustomItems={setCustomItems}
          /> :
        <Container 
          display={display}
          weapons={weapons}
          armor={armor}
          magItems={magItems}
        />
        
        }
    </div>
  )
}

export default App;
