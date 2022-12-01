const express = require('express');
const app = express()
const db = require('./config/db');
require('dotenv').config()
db()

// app.use(express.json())

//  app.use('/user', require('./routes/userRoutes'))

const port = process.env.PORT || 6000

app.listen(port, () => console.log('Server is running finally', port))
