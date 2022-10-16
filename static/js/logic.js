const chargingStations = 'ev-stations';



function mapStations(yearMin = 1970, yearMax = 2022) {
  //let years = `<${yearMin},${yearMax}>`;
  
  
  d3.json(chargingStations).then(function(data) {
    console.log("map stations",data);

    let stations = data.data;


    // define tile layers.
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Initialize all the LayerGroups that we'll use
    let layers = {
      TYPE_1: new L.LayerGroup(),
      TYPE_2: new L.LayerGroup(),
      DC_FAST: new L.LayerGroup()
    };
  
    // Create the map with layers
    let map = L.map("map", {
      center: [40.73, -118.0059],
      zoom: 5,
      layers: [
        layers.TYPE_1,
        layers.TYPE_2,
        layers.DC_FAST
      ]
    });

    // Add our "streetmap" tile layer to the map.
    streetmap.addTo(map);
  
    // Create an overlays object to add to the layer control.
    let overlays = {
      "EV Level 1 Chargers": layers.TYPE_1,
      "EV Level 2 Chargers": layers.TYPE_2,
      "EV DC Fast Chargers": layers.DC_FAST
    };

    // Create a new marker cluster group.
    let newMarker = L.markerClusterGroup(); 

    // Create a control for our layers, and add our overlays to it.
    L.control.layers(null, overlays).addTo(map);
    // Arrays that will store the created charging station Markers by charging type
    let chargerType;

    for (let i = 0; i < stations.length; i++) {
      // loop through the data array, create a new marker, and push it to the appropriate layer (note a station may have more than one type)
      let location = [[stations[i][9],stations[i][10]]];
      
      if( (stations[i][12] >= yearMin) && (stations[i][12] <= yearMax)){
        if(location){
          if(stations[i][5]>0){
            chargerType = 'TYPE_1';
          }
          if(stations[i][6]>0){
            chargerType = 'TYPE_2';
          }
          if(stations[i][7]>0){
            chargerType = 'DC_FAST';
          }
          // Create a new marker with the appropriate icon and coordinates.
          newMarker.addLayer( L.marker([stations[i][9],stations[i][10]]) )
          .bindPopup("<h3>" + stations[i][0] + "</h3><br><p>" + stations[i][1] + "<br>" + stations[i][2] + ", " + stations[i][3] + "<br>" + stations[i][4] + "</p>");

          // Add the new marker to the appropriate layer.
          newMarker.addTo(layers[chargerType]);
        }        
      }            
    }    
  });
}

mapStations();