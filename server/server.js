const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

const  mathHistory = [];
const arraySender = {};

arraySender.array = mathHistory;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.post('/math', (req,res) => {
    console.log(req.body);

    let total = 0;
    let history = req.body;

    if (req.body.mathOperator == 'plus') {
        history.total = parseInt(req.body.numberOne) + parseInt(req.body.numberTwo)
        console.log(total);
        mathHistory.push(history);
        console.log(mathHistory);
    }
    if (req.body.mathOperator == 'subtract') {
        total = parseInt(req.body.numberOne) - parseInt(req.body.numberTwo)
        console.log(total);
        mathHistory.push(history);
        console.log(mathHistory);
    }

    if(req.body.mathOperator == 'multiply') {
        total = parseInt(req.body.numberOne) * parseInt(req.body.numberTwo)
        console.log(total);
        mathHistory.push(history);
        console.log(mathHistory);
    }

    if(req.body.mathOperator == 'divide') {
        total = parseInt(req.body.numberOne) / parseInt(req.body.numberTwo)
        console.log(total);
        mathHistory.push(history);
        console.log(mathHistory);
    }

    res.send('shanice its working');

});

app.get('/math', (req,res) => {
    res.send(mathHistory);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});
