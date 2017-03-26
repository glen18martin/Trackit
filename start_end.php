<?php

if(isset($_GET['start_end']))
{
	$routeid = $_GET['start_end'];
$servername="localhost";
$username="root";
$password="";
$dbname="trackit";
$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn){
    die("Connection Failed: ".mysqli_connect_error());
}

                                $sql = "SELECT name FROM route WHERE routeid='$routeid'";
                                $result = mysqli_query($conn, $sql);

                                if (mysqli_num_rows($result) > 0) {
                                    // output data of each row
                                    $select= '<select style="width: 250px; height: 20px;"><option value="select">select</option>';
                                    while($row = mysqli_fetch_assoc($result)) {
                                        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
                                        $select.='<option value="'.$row['name'].'">'.$row['name'].'</option>';
                                    }
                                    $select.='</select>';
                                    echo $select;
                                } else {
                                    echo "0 results";
                                }

								
}							


							?>