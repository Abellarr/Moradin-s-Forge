const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require('cors');
const port = process.env.PORT || 5050;
app.use(express.json());
app.use(cors());

const pool = require('./connectDB.js');

// GET request: Returns info to client for all items
app.get('/api/items', (req,res, next)=>{
    console.log(req.method);
    console.log('Request for all items')
    pool.query('SELECT * FROM customitems;', (err, result)=>{
        if (err){
            return next(err);
        }
        let rows = result.rows;
        res.status(200).send(rows);
    })
})

// GET request: Returns info to client for a specific item (/items/:id/)
app.get('/api/items/:id/', (req,res, next)=>{
    console.log(req.method);
    const itemId = parseInt(req.params.id);
    console.log(`Request for item with id: ${itemId}`)
    pool.query('SELECT * FROM customitems WHERE id = $1;', [itemId], (err, result)=>{
        if (err){
            return next(err);
        }
        let item = result.rows;
        // Checks if any chars are returned before responding
        if (item[0]) {
            res.status(200).send(item);
        } else {
            res.status(404).send('Error Not found')
         }
    })
})

// POST request: Takes in request body and creates an entry into npc_char table with associated key from npc_type table (/:id/)
app.post('/api/items', (req, res, next)=>{
    console.log(req.method);
    const { name, type, rarity, attunement, description } = req.body;
    console.log(req.body);
    // checks for missing information in request and if the hitPoints block is a number
    if (!name || !type || !rarity || attunement !== typeof true || !description || attunement !== undefined) {
        console.log('Error: Input incorrect or missing information');
        return res.status(400).send('Error: Input incorrect or missing information');
    } else {
        pool.query('INSERT INTO customitems (name, type, rarity, attunement, description) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
        [name, type, rarity, attunement, description], (err, result)=>{
            if (err){
                return next(err);
            }
            let itemInfo = result.rows[0];
            console.log('Added: ' + name);
            res.status(200).send(itemInfo);
        })
    } 
})

// DELETE request: Deletes a character (/:charid/) from the database and responds to client with deleted info
app.delete('/api/items/:id/', (req,res, next)=>{
    console.log(req.method);
    const itemId = parseInt(req.params.id);
    // Checks to see if (/:id) and (/:charid) are valid numbers
    if (Number.isNaN(itemId)) {
        console.log('Error Invalid Path Name');
        return res.status(404).send('Error Invalid Path Name');
    } else {
        pool.query('DELETE FROM customitems WHERE id = $1 RETURNING *;', [itemId], (err, result)=>{
            if (err){
                return next(err);
            }
            let delItem = result.rows[0];
            // Checks if character was in the database and responds
            if (delItem){
                console.log(delItem);
                res.status(200).send(delItem);
            } else {
                console.log('Character not found');
                res.status(404).send('Error Not Found');
            }
        })
    }
})


// Generic error handling for any internal next() errors encountered.
app.use((err,req,res,next)=>{
    console.log('Error sent to middleware');
    console.log(err);
    res.status(500).send('Internal Error');
})

// Sets my server to listen to the port variable, which is 5050 by default
app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
})