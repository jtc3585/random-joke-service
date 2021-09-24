const fs = require('fs');

const client = fs.readFileSync(`${__dirname}/../client/joke-client.html`);
const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`);
const css = fs.readFileSync(`${__dirname}/../client/default-style.css`);

const getClient = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text-html' }); // send response headers
    response.write(client); // send content
    response.end(); // close connection
  };

const get404Response = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text-html' }); // send response headers
  response.write(errorPage); // send content
  response.end(); // close connection
};

const getCSS = (request,response) => {
    response.writeHead(200, { 'Content-Type': 'text/css' });
    response.write(css);
    response.end();    
}

module.exports.getClient = getClient;
module.exports.get404Response = get404Response;
module.exports.getCSS = getCSS;