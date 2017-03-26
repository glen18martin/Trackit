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
//echo "Connected successfully";


$atstop = $_GET['imat'];
$routeno = $_GET['routeid'];

$conn->select_db("trackit");

$result = $conn->query("SELECT * FROM bus WHERE routeid = " . $routeno);


if($result->num_rows > 0) {

    $busarray = array();

    while($row = $result->fetch_assoc()) {
        if($row['routedir'] == 0) {
            if($atstop > $row['laststopno']) {
                array_push($busarray, $row['pos']);
            } else echo "NULL";
        }

        if($row['routedir'] == 1) {
            if($atstop < $row['laststopno']) {
                array_push($busarray, $row['pos']);
            } else echo "NULL";
        }
    }

    echo json_encode($busarray);
    
    

}



