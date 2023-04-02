import React from 'react';

function ItemForm({ setCustomItems }) {
    let name = document.getElementById('name');
    let type = document.getElementById('type');
    let rarity = document.getElementById('rarity');
    let attunement = document.getElementById('attunement');
    let description = document.getElementById('description');
    let id = document.getElementById('id');
    let id2 = document.getElementById('id2');

    function handleClick() {
        fetch('http://localhost:5050/api/items', {method: 'GET'})
        .then(response => response.json())
        .then(data => setCustomItems(data));
        clearValues();
    }

    function gatherValues() {
        let allValues = {};
        allValues.name = name.value;
        allValues.type = type.value;
        allValues.rarity = rarity.value;
        allValues.attunement = (attunement.value === 'yes') ? true : false;
        allValues.description = description.value;
        console.log(allValues);
        return allValues;
    }

    function patchValues() {
        let patchVals = {};
        patchVals.name = name.value || undefined;
        patchVals.type = type.value || undefined;
        patchVals.rarity = rarity.value || undefined;
        patchVals.attunement = (attunement.value === 'yes') ? true : false;
        patchVals.description = name.value || undefined;
        patchVals.id = id2.value;
        console.log(patchVals);
        return patchVals;
    }

    function idValue() {
        let idValue = {};
        idValue.id = parseInt(id.value);
        console.log(idValue);
        return idValue;
    }

    function clearValues() {
        name.value = "";
        type.value = "";
        rarity.value = "";
        attunement.value = "no";
        description.value = "";
        id.value = "";
        id2.value = "";
    }

    function handlePost() {
        let sendData = gatherValues();
        fetch('http://localhost:5050/api/items', 
        { 
            method: 'POST',
            credentials: "same-origin",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(sendData)
        })
        .then(response => response.json())
        .then(data => setCustomItems([data]));
        clearValues();
    }

    function handleDelete() {
        let sendData = idValue();
        fetch(`http://localhost:5050/api/items/${sendData.id}`, 
        { 
            method: 'DELETE',
            credentials: "same-origin",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(sendData)
        })
        .then(response => response.json())
        .then(data => setCustomItems([data]));
        clearValues();
    }

    function handlePatch() {
        let patchData = patchValues();
        console.log(patchData);
        fetch(`http://localhost:5050/api/items/${patchData.id}`, 
        { 
            method: 'PATCH',
            credentials: "same-origin",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(patchData)
        })
        .then(response => response.json())
        .then(data => setCustomItems([data]));
        clearValues();
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
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
                <label htmlFor="id2" className='form-input' id="idInput">ID (for update): </label>
                <input className="input-box" type="text" name="type" id="id2" required></input>
            </div>
            <div className="form-input">
                <label htmlFor="description">Item description: </label>
                <textarea name="description" id="description" rows="8" cols="35" required></textarea>
            </div>
            <button
                className='form-submit-button'
                type="button"
                onClick={handlePost}
            >
                Submit Item
            </button>
            <button
                className='form-submit-button'
                type="button"
                onClick={handlePatch}
            >
                Update Item
            </button>
            <hr />
            <p className="form-input-text">
                Which item do you want to delete?
            </p>
            <div className="form-input">
                <label htmlFor="rarity">Item ID: </label>
                <input className="input-box" type="text" name="type" id="id" required></input>
            </div>
            <button
                className='form-submit-button'
                type="button"
                id="deleteButton"
                onClick={handleDelete}
            >
                Delete Item
            </button>
        </div>
    )

}

export default ItemForm;