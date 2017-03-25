
      var map;
      console.log("hi");
      alert("hello");
      function initMap() {
        var lat = 19.069238;
        var lng = 72.898302;
        var From= "ABC";
        var To="XYZ";
        var busno=53;
        map = new google.maps.Map(document.getElementById('map'), {

          center: {lat: lat, lng: lng},
          zoom: 13

        });
     //var mapOptions = {center: myCenter, zoom: 5};
    //var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:map.center});
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
    //content: "Bus No: "+busno+"\n\n From: "+From+" To: "+To
    content: '<p>Bus No: ' + busno + '\n</p>'+'<p>From: ' + From + '</p>' + '<p> To: ' + To + '</p>'

    });
    infowindow.open(map,marker);
      }

    
