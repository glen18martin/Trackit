var watchID = null;

// device APIs are available
//
//function onDeviceReady() {
    // Throw an error if no update is received every 30 seconds
    var options = { timeout: 300000000 };


    function startsending() {
      setInterval(function(){
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

      },3000);
    }

//  }

// onSuccess Geolocation
//
function onSuccess(position) {

    // var element = document.getElementById('geolocation');
    // element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
    //                     'Longitude: ' + position.coords.longitude     + '<br />' +
    //                     '<hr />'      + element.innerHTML;
console.log("Lat : "+position.coords.latitude + "and Long : "+position.coords.longitude);



var query = 'http://localhost/hack/Trackit/sendcor.php';

 var dataString= "latitude="+position.coords.latitude+"&longitude="+position.coords.longitude+"&send=";
 	//var dataString="username="+username+"&password="+password+"&login=";
    myApp.showIndicator();

    /*
    $$.ajax({
     url: query,
     //headers: {"X-Parse-Application-Id":applicationId,"X-Parse-REST-API-Key":restApiKey},
     type: "GET",
     data: dataString,
 	crossDomain: true,
 	cache: false,
     statusCode: {
      201: success201,
      400: notsuccess,
 	 404: myApp.alert("what"),
      500: notsuccess
     }
    });

    */


 $.ajax({
 type: "POST",
 url: query,
 data: dataString,
 crossDomain: true,
 cache: false,
 success: function(data){
 if(data=="success")
 {
 // localStorage.login="true";
 // localStorage.username=username;
 // mainView.router.loadPage('cndtr.html');
 // myApp.hideIndicator();
 console.log(data);
 }
 else if(data="failed")
 {
 myApp.hideIndicator();
  myApp.alert('Process of sending co-ordinates was unsuccessful, please try again','Trackit');
 }
 }
 });

}

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
