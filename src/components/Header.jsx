import React from 'react';
import Navbar from './Navbar';

function Header(props) {

    return (
        <div className="header">
            <Navbar display={props.display} setDisplay={props.setDisplay} />
            <h1 className="headerTitle">Moradin's Forge</h1>
        </div>
    )

}

export default Header;