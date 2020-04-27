const background = document.querySelector('.container-fourteen__background');
      arrowDown = document.getElementById('arrowDown');
      buttonCollapse = document.querySelector('.container-six__card-subheader').getAttribute("aria-expanded");

 function initMap() {
  var pos = {lat: -15.307911, lng: 124.261812},
      opt = {
        center: pos,
        zoom: 17,
        mapTypeId: 'satellite'
      },
      myMap = new google.maps.Map(document.getElementById('map'), opt),
      markerImage = {
        url: 'img/maps-and-flags.svg',
        size: new google.maps.Size(20, 26),
        scaledSize: new google.maps.Size(20, 26)
      },
      marker = new google.maps.Marker({
        position: pos,
        map: myMap,
        icon: markerImage,
        animation: google.maps.Animation.BOUNCE
      })
}

// if ()

background.onclick = function() {
  background.style.display = 'none';
  };



 function colAps() {
    if (buttonCollapse === "true"){
      arrowDown.style.transform = "rotate(180deg)"
}};
  
  console.log(arrowDown);