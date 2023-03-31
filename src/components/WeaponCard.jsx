import React from 'react';

function WeaponCard(props) {
    const { name, category, cost, damage_dice, damage_type, weight, properties} = props.weapon;

    return (
        <div className='card-display'>
            <h1 className="card-header">{name}</h1>
            <div>
                <p className="card-text">Category: {category}</p>
                <p className="card-text">Damage: {damage_dice}</p>
                <p className="card-text">Damage Type: {damage_type}</p>
                <p className="card-text">Properties: {properties}</p>
                <p className="card-text">Weight: {weight}</p>
                <p className="card-text">Cost: {cost}</p>
            </div>
        </div>
    )

}

export default WeaponCard;