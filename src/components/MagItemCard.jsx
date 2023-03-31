import React from 'react';

function MagItemCard(props) {
    const { name, type, desc, rarity, requires_attunement} = props.magItem;

    return (
        <div className='mag-card-display'>
            <h1 className="mag-card-header">{name}</h1>
            <p className="mag-card-text">Type: {type}</p>
            <p className="mag-card-text">Rarity: {rarity}</p>
            <p className="mag-card-text">Attunement: {(requires_attunement === "") ? 'No' : 'Yes'}</p>
            <p className="mag-card-text">Item Description: {desc}</p>
        </div>
    )

}

export default MagItemCard;