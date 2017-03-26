<?php

// establishing the MySQLi connection

header("Access-Control-Allow-Origin: *");


$con = mysqli_connect('localhost','root','','trackit');

if (mysqli_connect_errno())

{

echo "MySQLi Connection was not established: " . mysqli_connect_error();

}


// if(isset($_POST['login']))
// {
// $username=mysqli_real_escape_string($con,htmlspecialchars(trim($_POST['username'])));
// $password=mysqli_real_escape_string($con,htmlspecialchars(trim($_POST['password'])));
// $login=mysqli_num_rows(mysqli_query($con,"select * from `conductor` where `username`='$username' and `password`='$password'"));
// if($login!=0)
// {
// echo "success";
// }
// else
// {
// echo "failed";
// }
// }

$lat = $_GET['latitude'];
$lng = $_GET['longitude'];


if(isset($_GET['send']))
{
  echo "success";
  file_get_contents("http://10.0.4.236/hack/testing_send.php?busid=0&ls=0&coords=" . "$lat,$lng");
}

?>
