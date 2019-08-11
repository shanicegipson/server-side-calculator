const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

mathHistory = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/math', (req,res) => {
    res.send('Comming from Get');
});

app.post('/math', (req,res) => {
    dataForServer = req.body;
res.send('shanice its working');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});


function doMath () {
    if ($(this).data('math')="+") {
        valueOne + ValueTwo
    } else {
        
    }
}