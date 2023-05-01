const fs = require('fs');

// read file using async function
fs.readFile('./content/text.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// write file using async function
fs.writeFile('./content/new-text.txt', 'Hello, World!', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('File written successfully!');
  }
});
