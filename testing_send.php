<?php


$servername = "10.0.4.136";
$username = "hack";
$password = "lol";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

$conn->select_db("trackit");
$coords = file_get_contents("bus.pos");

$result = $conn->query("SELECT * FROM bus WHERE bus_id = 1");
if($result->num_rows > 0) {
    $conn->query("UPDATE bus SET current_coordinates = '$coords', route_id = 1 WHERE bus_id = 1;");
} else {
    $conn->query("INSERT INTO bus VALUES (1,1,1,'$coords');");
}




printf($conn->error) ;
?>