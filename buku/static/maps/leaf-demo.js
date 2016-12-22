var map = L.map( 'map', {
  center: [-2, 118],
  minZoom: 2,
  zoom: 5
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 subdomains: ['a','b','c']
}).addTo( map );

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i )
{
  var popup = '<b>'+markers[i].nama_buku +
              '</b><br/>Penerbit&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;' + markers[i].penerbit +
              '<br/>Kota terbit&nbsp;:&nbsp;' + markers[i].kota;

  var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
                  .bindPopup( popup );
				  
				  m.on('mouseover', function (e) {
            this.openPopup();
        });
        m.on('mouseout', function (e) {
            this.closePopup();
        });

  markerClusters.addLayer( m );
}

map.addLayer( markerClusters );