import fs from 'fs'

// read file with an a synchronous fs request

const rawData = fs.readFileSync('../data/carto_color_scheme/cartocolors.json');


//console.log(rawData)

// use JSON.parse( to parse raw string to JSON)
const data = JSON.parse(rawData)

// create new object with key 'DarkMint' and its object value
const outputData = {'DarkMint': data['DarkMint'] };

// stringify the JS object and output it in the geojson subdirectory

fs.writeFileSync('../data/clean_data/geojson/DarkMint.json', JSON.stringify(outputData));

console.log('data/clean_data/geojson/DarkMint.json written to file!')
