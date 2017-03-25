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


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

myApp.onPageInit('login', function (page) {



  $$('#submmit-register').on('click', function () {

   var username = $$('#register-username').val();
   var password = $$('#register-password').val();

   if (!username || !password){
    myApp.alert('Please fill in all Registration form fields');
    return;
   }



   // Do something here for "about" page
   var query = '10.0.4.136:3000/login';
   var postdata = {};

   postdata.username = username;
   postdata.password = password;

   myApp.showIndicator();

   $$.ajax({
    url: query,
    //headers: {"X-Parse-Application-Id":applicationId,"X-Parse-REST-API-Key":restApiKey},
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(postdata),
    statusCode: {
     201: success201,
     400: notsuccess,
     500: notsuccess
    }
   });


  });


var success201 = function(data, textStatus, jqXHR) {
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


})



// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})
