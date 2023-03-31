import React from 'react';

function ItemForm({ setCustomItems }) {
    let name = document.getElementById('name');
    let type = document.getElementById('type');
    let rarity = document.getElementById('rarity');
    let attunement = document.getElementById('attunement');
    let description = document.getElementById('description');

    function handleClick() {
        fetch('http://localhost:5050/api/items', {method: 'GET'})
        .then(response => response.json())
        .then(data => setCustomItems(data));
    }

    function gatherValues() {
        let allValues = {};
        allValues.name = name.value;
        allValues.type = type.value;
        allValues.rarity = rarity.value;
        allValues.attunement = (attunement.value === 'yes') ? true : false;
        allValues.description = description.value;
        return allValues;
    }

    function handlePost() {
        let sendData = gatherValues();
        fetch('http://localhost:5050/api/items', 
        { 
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: sendData
        })
        .then(response => response.json())
        .then(data => setCustomItems([data]));
    }

    function handleDelete() {
        fetch('http://localhost:5050/api/items', 
        { 
            method: 'DELETE',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => setCustomItems([data]));
    }

    return (
        <div className="custom-form">
            <button
                className='custom-button'
                type="button"
                onClick={handleClick}
            >
                Get All Items
            </button>
            <hr />
            <p className="form-input-text">
                Create your own custom item here:
            </p>
            <div className="form-input">
                <label htmlFor="name">Item name: </label>
                <input className="input-box" type="text" name="name" id="name" required></input>
            </div>
            <div className="form-input">
                <label htmlFor="type">Item type: </label>
                <input className="input-box" type="text" name="type" id="type" required></input>
            </div>
            <div className="form-input">
                <label htmlFor="rarity">Item rarity: </label>
                <input className="input-box" type="text" name="type" id="rarity" required></input>
            </div>
            <div>
                <label className="form-input" htmlFor="attunement">Requires attunement?</label>
                <select  name="attunement" id="attunement">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="form-input">
                <label htmlFor="description">Item description: </label>
                <textarea name="description" id="description" rows="8" cols="35" required></textarea>
            </div>
            <button
                className='form-submit-button'
                type="button"
            >
                Submit
            </button>
            <hr />
        </div>
    )

}

export default ItemForm;