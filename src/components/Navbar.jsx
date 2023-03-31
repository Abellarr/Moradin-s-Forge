import React from 'react';

function Navbar({ setDisplay }) {
    function handleClick(event) {
        setDisplay(event.target.id);
    }

    return (
        <ul className="nav-bar" >
            <li className="nav-button" id="home" onClick={handleClick}>Home</li>
            <li className="nav-button" id="weapons" onClick={handleClick}>Weapons</li>
            <li className="nav-button" id="armor" onClick={handleClick}>Armor</li>
            <li className="nav-button" id="magicItems" onClick={handleClick}>Magic Items</li>
            <li className="nav-button" id="itemCreator" onClick={handleClick}>Item Creator</li>
            <li className="nav-button" id="links">Links</li>
        </ul>
    )
}



export default Navbar;