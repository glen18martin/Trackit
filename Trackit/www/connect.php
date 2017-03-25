<?php
$servername="localhost";
$username="root";
$password="";
$dbname="trackit";
$conn = new mysqli($servername, $username, $password, $dbname);
if (!$conn){
	die("Connection Failed: ".mysqli_connect_error());
}
// echo "Connection Successful<br>";
?>