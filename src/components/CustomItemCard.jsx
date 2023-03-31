import React from 'react';

function CustomItemCard(props) {
    const {name, type, rarity, attunement, description, id} = props.item
    console.log(name)
    return (
        <div className="item-container">
            <div className='custom-card-display'>
                <h1 className="custom-card-header">{name}</h1>
                <p className="custom-card-text">ID: {id}</p>
                <p className="custom-card-text">Type: {type}</p>
                <p className="custom-card-text">Rarity: {rarity}</p>
                <p className="custom-card-text">Requires Attunement: {(attunement === true) ? 'Yes' : 'No'}</p>
                <p className="custom-card-text">Item Description: {description}</p>
            </div>
        </div>
    )

}

export default CustomItemCard;