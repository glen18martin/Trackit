<?php
$servername="localhost";
$username="root";
$password="";
$dbname="trackit";
$conn = new mysqli($servername, $username, $password, $dbname);
if (!$conn){
    die("Connection Failed: ".mysqli_connect_error());
}

                                $sql = "SELECT * FROM route ";
                                $result = mysqli_query($conn, $sql);

                                if (mysqli_num_rows($result) > 0) {
                                    // output data of each row
                                    $select= '<select name="select" style="width: 250px; height: 20px;">';
                                    while($row = mysqli_fetch_assoc($result)) {
                                        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
                                        $select.='<option value="'.$row['route_no'].'">'.$row['route_no']."   ".$row['route'].'</option>';
                                    }
                                    $select.='</select>';
                                    echo $select;
                                } else {
                                    echo "0 results";
                                }

								
							


							?>