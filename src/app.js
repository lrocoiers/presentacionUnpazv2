const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
    console.log("pase por aca");
    res.json({ mensaje : 'hola mundo'}).status(200)

});

app.listen(port, ()=>{console.log('Estoy escuchando en el puerto:'+ port)});

