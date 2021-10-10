const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // punto 4, para poder acceder desde el browser a todos los archivos 

app.use(express.urlencoded());

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/frame.html'))
});

app.get('/shopping-cart', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/shopping-cart.html'))
});

app.get('/favorites', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/favorites.html'))
});

app.post('/search', (req,res) =>{
    console.log(req.body); // para leer el body
    res.redirect('/');
})

app.post('/register', (req,res) =>{
    console.log(req.body); // para leer el body
    res.redirect('/');
})

app.post('/login', (req,res) =>{
    console.log(req.body); // para leer el body
    res.redirect('/');
})


app.listen(3030, () => console.log('levantaste el server con exito'));