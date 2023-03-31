import React from 'react';
import ItemForm from './ItemForm.jsx';
import ItemContainer from './ItemContainer.jsx';

function CustomContainer({ display, customItems, setCustomItems }) {

    return (
        <div className="custom-container">
            <ItemForm 
                display={display}
                customItems={customItems}
                setCustomItems={setCustomItems}
            />
            <ItemContainer
                display={display}
                customItems={customItems}
                setCustomItems={setCustomItems} 
            />
        </div>
    )

}

export default CustomContainer;