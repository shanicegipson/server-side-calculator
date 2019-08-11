const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

mathHistory = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.post('/math', (req,res) => {
    console.log(req);
res.send('shanice its working');
});

app.get('/math', (req,res) => {
    res.send('Comming from Get');
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