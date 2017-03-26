// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: false
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

if(localStorage.getItem('username') == null){
   $('.login p').html('Login');
}
else
{
	$('.login p').html('Logout');
}

$(document).on('click','.login',function(){
	
if(localStorage.getItem('username') == null){
   mainView.router.loadPage('login.html');
      $('.login p').html('Login');
}
else
{
	localStorage.removeItem('username');
	mainView.router.loadPage('login.html');
	$('.login p').html('Login');
}
});


$(document).on('click','#cndtr_link',function(){
if(localStorage.getItem('username') == null){
   mainView.router.loadPage('login.html');
      $('.login p').html('Login');
}
else
{
	mainView.router.loadPage('cndtr.html');
}
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

myApp.onPageInit('cndtr', function (page) {
    // Do something here for "about" page

})


myApp.onPageInit('login', function (page) {



  $$('#submmit-register').on('click', function () {

   var username = $$('#register-username').val();
   var password = $$('#register-password').val();
	
   if (!username || !password){
    myApp.alert('Please fill in all Login form fields','Trackit');
    return;
   }



   // Do something here for "about" page
   var query = 'http://10.0.4.236/hack/login.php';

   
	var dataString="username="+username+"&password="+password+"&login=";
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
beforeSend: function(){ $("#login").html('Connecting...');},
success: function(data){
if(data=="success")
{
localStorage.login="true";
localStorage.username=username;
mainView.router.loadPage('cndtr.html');
myApp.hideIndicator();
}
else if(data="failed")
{
myApp.hideIndicator();
 myApp.alert('Login was unsuccessful, please try again','Trackit');
}
}
});

/*
var success201 = function(data, textStatus, jqXHR) {
	myApp.alert(data);
 // We have received response and can hide activity indicator
 myApp.hideIndicator();
 // Will pass context with retrieved user name
 // to welcome page. Redirect to welcome page
 mainView.router.load({
 template: Template7.templates.welcomeTemplate,
  context: {
   name: username
  }
 });
};

var notsuccess = function(data, textStatus, jqXHR) {
 // We have received response and can hide activity indicator
 myApp.hideIndicator();
 myApp.alert('Login was unsuccessful, please try again');
};
*/
  });
})



// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
      //  myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page');
})

var selectedBusNo, selectedStopNo;




myApp.onPageInit('sample', function (page) {
    myApp.alert("LOL");
    console.log(selectedBusNo + "  " + selectedStopNo);
});

myApp.onPageInit('passenger_route', function (page) {

    $('#busno').change(function(){ 
        var value = $(this).val();
        selectedBusNo = value;

        $.ajax({

                url: "http://10.0.4.236/hack/get_route.php?route=" + value
            }).done(function(data) {

                
                var routes = [];
                var data = JSON.parse(data);

                for(var i = 0; i < data.length; i++) {
                        jQuery("#stopno").append("<option>"+data[i].name+"</option>");
                }
            });
            
        });



        $('#stopno').change(function(){ 
        var value = $(this).val();
        selectedStopNo = value;
        });


    $.ajax({
            url: "http://10.0.4.236/hack/get_route.php?buslist=1"
          }).done(function(data) {
            
            var routes = [];
            var data = JSON.parse(data);

            for(var i = 0; i < data.length; i++) {
                    jQuery("#busno").append("<option>"+data[i].routeid+"</option>");
            }
          });

     

})

