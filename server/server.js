const express = require('express');
const app = express()
const db = require('./config/db');
const cors = require('cors')
require('dotenv').config()
db()

const artistsRoutes = require("./routes/artistRoutes")
const albumsRoutes = require("./routes/albumRoutes")
const songsRoutes = require("./routes/songRoutes")

app.use(express.json())
app.use(cors())
app.use('/api/users/', require('./routes/userRoutes'))
app.use('/api/artists/', artistsRoutes)
app.use('/api/albums/', albumsRoutes)
app.use('/api/songs/', songsRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server is up and running at port', port))


app.use(express.static('client/build'));

if (process.env.NODE_ENV === 'production') {

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
    })

}