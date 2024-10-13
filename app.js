import express, { json } from 'express';

// import dotenv from 'dotenv';     // ES module
const dotenv = require('dotenv');    // Common JS syntax
// Load environment variables from .env file
dotenv.config();

const app = express()

const PORT =  4000
app.listen(PORT, () => {
    console.log('server is running on port 4000')
})

app.get('/', async(req, res) => {
    try {
        res.send('I am alive and healthy!')
    } catch(error) {
        console.log('error', error)
    }
})