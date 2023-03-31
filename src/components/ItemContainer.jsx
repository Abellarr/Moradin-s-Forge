import React from 'react';
import CustomItemCard from './CustomItemCard.jsx';

function ItemContainer({ display, customItems, setCustomItems }) {
    console.log(customItems);
    return (
        <div className="item-container">
           {customItems.map(item => <CustomItemCard key={item.id} item={item}/>)}
        </div>
    )

}

export default ItemContainer;