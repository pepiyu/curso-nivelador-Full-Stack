const express = require('express');
// Constants
// const hostname = '127.0.0.1';
const hostname = '0.0.0.0';
const port = 8080;

// App
const app = express();
const messages = {
    1: 'Hello World',
    2: 'Hello there',
}

// GET method route
app.get('/', function (req, res) {
    res.send(messages);
});
  
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

// GET method route
app.get('/secret', function (req, res, next) {
    res.send('Never be cruel, never be cowardly. And never eat pears!');
    console.log('This is a console.log message.');
});

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);

