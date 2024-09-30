// // Import the 'fs' (File System) module
const fs = require('fs');

// Read the file asynchronously
fs.readFile('paragraph.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
   // If no error, output the content of the file to the terminal
   console.log('File Content:\n', data);
});


