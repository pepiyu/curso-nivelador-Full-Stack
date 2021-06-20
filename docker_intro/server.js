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
    "Computers are evil!",
    "How soon not now, becomes never.",
]

const animalsAbout = {
    pig: "Pigs are very clean animals!",
    bird: "Birds can fly",
    cat: "Some humans love cats. I find them annoying",
    dog: "I love dogs, specially pugs. They\'re amazinnggg!",
    dolphin: "Dolphins sleep by resting one side of the brain at a time.",
    fish: "Fish can swim.",
    dinosaurs: "Dinosaurs were reptiles that lived on Earth from about 230 million years ago to about 65 million years ago.",
}


// GET method route
app.get('/random', function (req, res) {
    
    var random = messages[Math.floor(Math.random()*messages.length)];

    var cowSays = random
    res.setHeader('Content-Type', 'text/txt');
    res.end(
      cowsay.say({
        text: cowSays,
        e: "oO",
        T: "U "
      })
    );
});


router.get('/:animal', function(req, res) {
    // here we have bird or fish in req.params.animal
    if(animalsAbout[req.params.animal]) {

        var cowSays = animalsAbout[req.params.animal]
        
    } else {

        var cowSays = 'I\'ve never met them before. Try another animal'

    }

    res.setHeader('Content-Type', 'text/txt');
    res.end(
      cowsay.say({
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
Add an animal name in your URL using \'/\' (/dinosaurs, /dog, /cat, etc).\
 I also talk about random philosophy. Add in your URL /random',
        e: "oO",
        T: "U "
      })
    );

})
  

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);

