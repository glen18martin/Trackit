
	document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
	console.log("navigator.geolocation works well");
	navigator.geolocation.getCurrentPosition(geolocationSuccess,[geolocationError],[geolocationOptions]);
}

	// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//

var onSuccess = function(position) {
  alert('Latitude: '          + position.coords.latitude          + '\n' +
				'Longitude: '         + position.coords.longitude         + '\n' +
				'Altitude: '          + position.coords.altitude          + '\n' +
				'Accuracy: '          + position.coords.accuracy          + '\n' +
				'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
				'Heading: '           + position.coords.heading           + '\n' +
				'Speed: '             + position.coords.speed             + '\n' +
				'Timestamp: '         + position.timestamp                + '\n');

				
				var lat=position.coords.latitude;
				var lng=position.coords.longitude;

			localStorage.setItem("latitude", lat);
			localStorage.setItem("longitude", lng);

			 var getlat = window.localStorage.getItem("latitude");
			 var getlng = window.localStorage.getItem("longitude");
};



// onError Callback receives a PositionError object
function onError(error) {
	alert('code: '    + error.code    + '\n' +
				'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

// $(document).ready(function(){
// 	var url=""; // PHP File
//
// 	var getlat = window.localStorage.getItem("latitude");
// 	var getlng = window.localStorage.getItem("longitude");
// 	$("#json-data").empty();
// 	$.getJSON(url,{latitude :getlat, longitude :getlng},function(data){
// 			console.log(data);
// 				$.each(data.tutorials, function(i,post){
// 				var newRow =
//
// 						"<tbody>"
// 				+"<tr>"
// 				+"<td data-label='Organization Name'>"+"<br>"+post.orphanage_name+"</td>"
// 				+"<td data-label='Address'>"+"<br>"+post.orphanage_address+"</td>"
// 				+"<td data-label='Post'>"+"<br>"+post.orphanage_posts+"</td>"
// 				+"<td data-label='Head'>"+"<br>"+post.orphanage_head+"</td>"
// 				+"<td data-label='Email'>"+"<br>"+post.orphanage_email+"</td>"
// 				+"<td data-label='Contact'>"+"<br>"+post.orphanage_contact+"</td>"
// 				+"<td data-label=''><a href=tel:'"+post.orphanage_contact+"'>CALL</a></td>"
// 				+"<td data-label=''><a href=mailto:'+post.orphanage_email+'?subject=Helping Hand &body=Name:,Adress:,Any code for delivary verification:,message:,Day and Time message:,Thank You>SEND A REQUEST</a></td>"
// 				+"</tr>"
// 				+"</tbody>";
// 				$(newRow).appendTo("#json-data");
// 				});
// 			});
// 		});
//
// });
