const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(express.static('server/public'));

app.get('/demo', (req,res) => {
    console.log('GET Route!');
    res.send('Got GET!');
});

// app.post

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});