function initMap() {
  var pos = {lat: -15.307911, lng: 124.261812};
  var opt = {
    center: pos,
    zoom: 17,
    disableDefaultUI: true,
    scrollwheel: false,
    mapTypeId: 'satellite'
  }
  var myMap = new google.maps.Map(document.getElementById('map'), opt);
  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    icon: '../img/maps-and-flags.svg',
    animation: google.maps.Animation.DROP,
    
  })
}