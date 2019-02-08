const express = require('express');
var app = express();

var json = {'alumnos': [
        {nombre:'Daniel'}, 
        {nombre:'Jessica'},
        {nombre: 'Claudia'}
    ]};
    
app.listen(3000, function(){
    console.log('listening on port 3000');
});

app.post('/', (req, res) => {
        res.send(json.alumnos);
        console.log(json.alumnos);
});

app.post('/:nombre', (req, res) => {
    res.send(req.params.nombre);
    console.log(req.params.nombre);
});