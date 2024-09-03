const gm = require('gm')
const path = require('path');

// Get the input file from command line arguments
const inputFile = process.argv[2];

if (!inputFile) {
  console.error('Please provide an input HEIC file.');
  process.exit(1);
}

// Define the output file path
const outputFile = path.basename(inputFile, path.extname(inputFile)) + '.jpg';

// Convert HEIC to JPEG
gm(inputFile)
  .write(outputFile, (err) => {
    if (err) {
      console.error('Error converting image:', err);
    } else {
      console.log(`Image converted successfully: ${outputFile}`);
    }
  });
