//import express
const express = require('express')
const app = express()
const port = 3000

//creazione rotta per i post nel server locale
const postsController = require('./controllers/posts.js');
app.get('/posts', postsController.index);

//base con rotta / che rimanda l'h1
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>');
  });

//configurazione degli asset statici 
app.use(express.static('public'));

//avvio server
app.listen(port, () => {
    console.log(`Server sta lavorando sulla porta: ${port}`);
    
})
