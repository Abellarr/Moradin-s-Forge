import React from 'react';

function Navbar() {
    return (
        <ul className="nav-bar" >
            <li className="nav-button" id="home">Home</li>
            <li className="nav-button" id="weapons">Weapons</li>
            <li className="nav-button" id="armor">Armor</li>
            <li className="nav-button" id="magicItems">Magic Items</li>
            <li className="nav-button" id="itemCreator">Item Creator</li>
            <li className="nav-button" id="links">Links</li>
        </ul>
    )
}



export default Navbar;