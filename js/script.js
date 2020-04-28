const background = document.querySelector('.container-fourteen__background');

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


  //



    function arrow(evt, arrowRotate) {
      var i, arrowIco, collButton;
      arrowIco = document.getElementsByClassName("arrowDown");
      for (i = 0; i < arrowIco.length; i++) {
        arrowIco[i].style.transform = "rotate(0deg)";
      }
      collButton = document.getElementsByClassName("container-six__card-subheader");
      for (i = 0; i < collButton.length; i++) {
        collButton[i].className = collButton[i].className.replace(" active", "");
      }
      document.getElementById(arrowRotate).style.transform = "rotate(180deg)";
      evt.currentTarget.className += " active";
    }