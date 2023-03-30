import React from 'react';

function MagItemCard() {
    const { name, type, desc, rarity, requires_attunement} = props.magicItems;

    return (
        <div className='card-display'>
            <h1 className="card-header">{name}</h1>
            <p className="card-text">Type: {type}</p>
            <p className="card-text">Rarity: {rarity}</p>
            <p className="card-text">Attunement: {(requires_attunement === "") ? 'None' : requires_attunement}</p>
            <p className="card-text">Item Description: {desc}</p>
        </div>
    )

}

export default MagItemCard;