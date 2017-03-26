<?php


//$servername = "10.0.4.136";
//$username = "hack";
//$password = "lol";


$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

$conn->select_db("trackit");
//$coords = file_get_contents("bus.pos");
$coords = $_GET['coords'];
$busid = $_GET['busid'];
$dir = 0;
$laststop = $_GET['ls'];

$result = $conn->query("SELECT * FROM bus WHERE routeid = 0");
if($result->num_rows > 0) {
    $conn->query("UPDATE bus SET pos = '$coords', routeid = 0, routedir = $dir, laststopno = $laststop WHERE busid = $busid;");
} else {
    $conn->query("INSERT INTO bus VALUES ($busid,0,'$coords',$dir,$laststop);");
}




printf($conn->error) ;
?>