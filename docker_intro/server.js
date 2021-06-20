const express = require('express');
var cowsay = require('cowsay')
var router = express.Router();
// Constants
// const hostname = '127.0.0.1';
const hostname = '0.0.0.0';
const port = 8080;

// App
const app = express();
const messages = [
    "Due tomorrow? Do tomorrow.", 
    "The sooner I fall behind, the more time I have to catch up.",
    "Nothing makes a person more productive than the last minute.",
    "Someday is not a day of the week.",
    "“How soon not now, becomes never.” ― Martin Luther King",
]

var cowSays = ''
   
router.get('/:animal', function(req, res) {
    // here we have bird or fish in req.params.animal
    if(req.params.animal == 'bird') {

        cowSays = 'Birds can fly'

    } else if(req.params.animal == 'cat') {

        cowSays = 'Some humans love cats. I find them annoying'
        
    } else if(req.params.animal == 'dog') {

        cowSays = 'I love dogs, specially pugs. They\'re amazinnggg!'

    } else if(req.params.animal == 'fish') {

        cowSays = 'Fish can swim'

    } else if(req.params.animal == 'random') {

        var random = messages[Math.floor(Math.random()*messages.length)];

        cowSays = random
        
    } else {

        cowSays = 'I\'ve never met them before, sorry. Try again'

    }

    res.setHeader('Content-Type', 'text/txt');
    res.end(
      cowsay.say({
        //text: "hello",
        //text: random,
        text: cowSays,
        e: "oO",
        T: "U "
      })
    );
});
app.use('/', router);

//GET method route
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/txt');
    res.end(
      cowsay.say({
        text: 'Hello Human. I\'m a talky farm cow and I know all about animals. \
Write an animal name in the URL using /animals.\
 I also talk about random philosophy. Write in the URL /random',
        e: "oO",
        T: "U "
      })
    );

})

  
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

