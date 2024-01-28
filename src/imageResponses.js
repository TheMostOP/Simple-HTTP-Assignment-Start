const fs = require('fs'); // pull in the file system module

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/x-png' });
  response.write(spongegar);
  response.end();
};

module.exports = {
  getImage,
};
