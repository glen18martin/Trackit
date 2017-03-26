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



$conn->select_db("trackit");




if(isset($_GET['buslist'])) {

    $result = $conn->query("SELECT DISTINCT routeid FROM route");

    if($result->num_rows > 0) {

        $arr = array();

        while($row = $result->fetch_assoc()) {
            array_push($arr, $row);
        }

        echo json_encode($arr);
        
        

    }

    die;
}



if(isset($_GET['routeid'])) {

    $result = $conn->query("SELECT * FROM route where routeid = " . $_GET['routeid']);

    if($result->num_rows > 0) {

        $arr = array();

        while($row = $result->fetch_assoc()) {
            array_push($arr, $row);
        }

        echo json_encode($arr);
        
        

    }

    die;
}



$result = $conn->query("SELECT * FROM route");

if($result->num_rows > 0) {

    $arr = array();

    while($row = $result->fetch_assoc()) {
        array_push($arr, $row);
    }

    echo json_encode($arr);
    
    

}



