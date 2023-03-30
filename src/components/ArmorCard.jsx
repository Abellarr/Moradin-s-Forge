import React from 'react';

function ArmorCard() {
    const { name, category, cost, ac_string, strength_requirement, stealth_disadvantage} = props.armor;

    return (
        <div className='card-display'>
            <h1 className="card-header">{name}</h1>
            <p className="card-text">Category: {category}</p>
            <p className="card-text">Armor Class: {ac_string}</p>
            <p className="card-text">Strength Requirement: {(strength_requirement) ? strength_requirement : 'None'}</p>
            <p className="card-text">Stealth Disadvantage: {(stealth_disadvantage) ? 'Yes' : 'No'}</p>
            <p className="card-text">Cost: {cost}</p>
        </div>
    )

}

export default ArmorCard;