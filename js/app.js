(function () {
  // using D3 fetch to request data for neighborhoods, mint color scheme, mandir points, and places of worship asynchronously

  const neighborhoods = d3.json('../data/clean_data/mapshaper_geojson/hood_buffers_simplified.json');
  const mintColorScheme = d3.json('../data/clean_data/geojson/DarkMint.json');
  const mandirs = d3.json('../data/clean_data/mapshaper_geojson/mandirs_simplified.json');
  const place_worship = d3.json('../data/clean_data/mapshaper_geojson/places_of_worship.json');

  // use Promise to wait until data is loaded
  Promise.all([neighborhoods, mintColorScheme, mandirs, place_worship]).then(drawMap);

  function drawMap(data) {

    //inspect array of data 
    console.log(data)

    const varanasiHoods = data[0];
    const mintColors = data[1];
    const mandirPoints = data[2]
    const worship_place = data[3];


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
  }
})
  ();

