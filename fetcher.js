const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2, 4);

request(args[0], (err, resp, body) => {
  if (!err) {

    fs.writeFile(args[1], body, error => {
      if (error) {
        console.error('Dear USER: ', error);
        return;
      }
      //file written successfully
      console.log(`Downloaded and saved ${body.length} bytes to ${args[0]}.`);
    });

  }

  else console.log('Dear USER: ', err);
});