var fs = require('fs');
var mysql=require('mysql');
var database = require('../config/db.js');


/*
exports.login = function (req, res) {
	/*
	var username = req.body.username;
	var password = req.body.password;
	
  connection.query("select * from conducter",function(err,rows){
      connection.release();
      if(!err) {
          //res.json(rows);

         // res.json("success");
          //res.json("failure");
		  
		  console.log("sdadas");
      }


	  });
	
};
*/



exports.login = function(req,res) {

	console.log("sdas");
	//var username = req.body.postdata.username;
	
	
	console.log(req.param.username);
	/*
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query("select * from conductor where username="+username+" and password="+password,function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
  });
  */
};


