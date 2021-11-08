// Loading json for Carto's color scheme to npm with require() statement
"use strict"
const colors = require('../data/carto_color_scheme/cartocolors.json');

console.log(colors)

// create a new object to store the Dark Mint scheme 

const DarkMnt = {'DarkMint': colors['DarkMint'] };

console.log(DarkMnt)

// save out this using the JSON.stringify method
fs.writeFileSync('../data/clean_data/geojson/DarkMint.json', JSON.stringify(DarkMint));

console.log('data/clean_data/geojson/DarkMint.json written to file!')
