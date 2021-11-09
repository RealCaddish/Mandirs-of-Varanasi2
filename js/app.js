(function () {
  // using D3 fetch to request data for neighborhoods, mint color scheme, mandir points, and places of worship asynchronously

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

  const neighborhoods = d3.json('../data/clean_data/geojson/hoods_buffered2.json.geojson');
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

    console.log(data[1])

    // create layerGroup with the neighborhood polygons
    // having trouble with viewing these in the browser still
    const neighborhoodsLayerGroup = L.geoJSON(varanasiHoods, {
    }).addTo(map);

    // convert the GeoJSoON to Leaflet L.geoJson() object and create new clusterMarker groups 
    const markers = L.markerClusterGroup();
    
    // loop through all of our mandir features
    mandirPoints.features.forEach(function(feature) {

      // createw new Leaflet marker for each 
      let coords = feature.geometry.coordinates;
      let marker = L.marker([coords[1], coords[0]]);
      
      // reference to the deity 
      let deity = feature.properties.deity;

      // reference to the private or public nature of the temple
      let pubPriv = feature.properties.private_or;

      // reference to temple type
      let templeType = feature.properties.what_kind_

      // bind a tooltip to the marker
      marker.bindTooltip(`<h1> Mandir Location</h1>
                          <h2>Deity Housed: ${deity}
                          <h2>Public or Private: ${pubPriv}
                          <h2>Temple Type: ${templeType}
                          `)
  
      // add the marker to markerClusterGroup
      markers.addLayer(marker)
    });

    // add the markerClusterGroup to the map
    map.addLayer(markers);

    const templeLocations = L.geoJSON(worship_place, {
      style: L.circleMarker
    })


  }
})
  ();

