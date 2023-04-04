import React, { useEffect, useState } from 'react';
import WeaponCard from './WeaponCard.jsx';
import ArmorCard from './ArmorCard.jsx';
import MagItemCard from './MagItemCard.jsx';
import HomeCard from './HomeCard.jsx';

function Container({ display, weapons, armor, magItems }) {
        

    return (
        <div className='main-container'>
            <div className={(display==='home') ? 'home-container' : 'inner-container'}>
                {(display === 'home') ? <HomeCard /> : null}
                {(display === 'weapons') ? weapons.map((weapon, index) => <WeaponCard key= {'w'+index} weapon={weapon} />) : null}
                {(display === 'armor') ? armor.map((armor, index) => <ArmorCard key= {'a'+index} armor={armor} />) : null}
                {(display === 'magicItems') ? magItems.map((magItem, index) => <MagItemCard key= {'m'+index} magItem={magItem} />) : null}
            </div>
        </div>
    )

}

export default Container;