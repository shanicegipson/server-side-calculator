const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.listen();