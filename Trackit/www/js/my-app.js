// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
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
   window.location.href="login.html";
}
else
{
	localStorage.removeItem('username');
	window.location.href="index.html";
}
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

myApp.onPageInit('cndtr', function (page) {
    // Do something here for "about" page
if(localStorage.getItem('username') == null){
   window.location.href="login.html";
}
})-


myApp.onPageInit('login', function (page) {



  $$('#submmit-register').on('click', function () {

   var username = $$('#register-username').val();
   var password = $$('#register-password').val();
	
   if (!username || !password){
    myApp.alert('Please fill in all Login form fields','Trackit');
    return;
   }



   // Do something here for "about" page
   var query = 'http://localhost:81/Trackit/login.php';

   
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
window.location.href = "cndtr.html";
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
