var fs = require('fs');
var mysql=require('mysql');
var database = require('../config/db.js');
exports.login = function (req, res) {

  connection.query("select * from conducter",function(err,rows){
      connection.release();
      if(!err) {
          //res.json(rows);

          res.json("success");
          res.json("failure");
      }
  });
};
