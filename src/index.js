// pull in the HTTP server module
const http = require('http');

// pull in URL and query modules (for URL parsing)
const url = require('url');
const path = require('path');

// locally this will be 3000, on Heroku it will be assigned
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// here's our 404 page
const errorPage = `
<html>
    <head>
        <title>404 - File Not Found!</title>
    </head>
    <body>
        <h1>404 - File Not Found!</h1>
        <p>Check your URL, or your typing!!</p>
        <p>Perhaps you are looking for <a href="/random-joke">/random-joke</a>?</p>
    </body>
</html>`;

// Joke Array
const jokes = [
    {q:"What did the dog say when he rubbed his tail on the sandpaper?",a:"Ruff, Ruff!"},
    {q:"Why don't sharks like to eat clowns?",a:"Because they taste funny!"},
    {q:"What did the boy cat say to the girl cat?",a:"You're Purr-fect!"},
    {q:"What is a frog's favorite outdoor sport?",a:"Fly Fishing!"},
    {q:"Did you hear about the cheese factory that exploded in France?",a:"There was nothing left but de Brie!"},
    {q:"Is this pool safe for diving?",a:"It deep ends!"},
    {q:"Dad, can you put my shoes on?",a:"I dont think theyll fit me!"},
    {q:"Can February March?",a:"No, but April May!"},
    {q:"What lies at the bottom of the ocean and twitches?",a:"A nervous wreck!"},
    {q:"Dad, can you put the cat out?",a:"I didnt know it was on fire!"},
    {q:"What did the ocean say to the sailboat?",a:"Nothing, it just waved!"},
    {q:"What do you get when you cross a snowman with a vampire?",a:"Frostbite!"}
];

// 12 jokes randomized for json posting
const getRandomJokeJSON = () => {
    const number = Math.floor(Math.random() * (11 - 0)) + 0;
    const responseObj = {
        q: jokes[number].q,
        a: jokes[number].a
    };
    return JSON.stringify(responseObj);
}


// this is the function that will be called every time a client request comes in
// this time we will look at the `pathname`, and send back the appropriate page
// note that in this course we'll be using arrow functions 100% of the time in our server-side code
const onRequest = (request, response) => {

  const parsedUrl = url.parse(request.url);
  const pathname = parsedUrl.pathname;

  if(pathname == "/random-joke"){
    response.writeHead(200, {'Content-Type': 'text-plain'}); // send response headers
    response.write(getRandomJokeJSON()); // send content
    response.end(); // close connection          
  }else{
    response.writeHead(404, {'Content-Type': 'text-html'}); // send response headers
    response.write(errorPage); // send content
    response.end(); // close connection      
  }
};


// create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port); // method chaining!
