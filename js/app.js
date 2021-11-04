(function () {

  //map options
  const options = {
    center: [37.265, -94.04],
    zoom: 4
  }
  //instantiate Leaflet map
  const map = L.map('map', options);

  // add CARTO voyager tiles with no labels
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map);
});