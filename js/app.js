(function () {

  //map options
  const options = {
    center: [25.308, 83.008],
    zoom: 13
  }
  //instantiate Leaflet map
  const map = L.map('map', options);

  // add CARTO voyager tiles with no labels
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map);
})

// Loading json for Carto's color scheme to npm with require() statement
"use strict"
const colors = require('../data/clean_data/cartocolors.json');

console.log(colors)

  ();

