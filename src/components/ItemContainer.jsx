import React from 'react';
import CustomItemCard from './CustomItemCard.jsx';

function ItemContainer({ display, customItems, setCustomItems }) {
    console.log(customItems);
    return (
        <div className='main-item-container'>
            <div className="item-container">
                {customItems.map(item => <CustomItemCard key={item.id} item={item}/>)}
            </div>
        </div>
    )

}

export default ItemContainer;