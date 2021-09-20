// Joke Array
const jokes = [
  { q: 'What did the dog say when he rubbed his tail on the sandpaper?', a: 'Ruff, Ruff!' },
  { q: "Why don't sharks like to eat clowns?", a: 'Because they taste funny!' },
  { q: 'What did the boy cat say to the girl cat?', a: "You're Purr-fect!" },
  { q: "What is a frog's favorite outdoor sport?", a: 'Fly Fishing!' },
  { q: 'Did you hear about the cheese factory that exploded in France?', a: 'There was nothing left but de Brie!' },
  { q: 'Is this pool safe for diving?', a: 'It deep ends!' },
  { q: 'Dad, can you put my shoes on?', a: 'I dont think theyll fit me!' },
  { q: 'Can February March?', a: 'No, but April May!' },
  { q: 'What lies at the bottom of the ocean and twitches?', a: 'A nervous wreck!' },
  { q: 'Dad, can you put the cat out?', a: 'I didnt know it was on fire!' },
  { q: 'What did the ocean say to the sailboat?', a: 'Nothing, it just waved!' },
  { q: 'What do you get when you cross a snowman with a vampire?', a: 'Frostbite!' },
];

// pull in underscore.js for shuffle
const _ = require("underscore");

// 12 jokes randomized for json posting
const getRandomJokeJSON = (limit = 1) => {
  limit = Math.floor(limit);
  if(limit < 1){limit=1}
  if(limit > jokes.length)(limit=jokes.length)

  const responseObj = _.shuffle(jokes).slice(0,limit);

  return JSON.stringify(responseObj);
};

const getRandomJokeResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(getRandomJokeJSON(params.limit));
  response.end();
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;
