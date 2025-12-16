var mysql=require('mysql');
var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"event_booking"
});
module.exports=db;
