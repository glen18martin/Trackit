<?php
if(isset($_GET['login']))
{
	echo "asdasda";
$username=mysql_real_escape_string(htmlspecialchars(trim($_POST['username'])));
$password=mysql_real_escape_string(htmlspecialchars(trim($_POST['password'])));
$login=mysql_num_rows(mysql_query("select * from `conductor` where `username`='$username' and `password`='$password'"));
if($login!=0)
{
echo "success";
}
else
{
echo "failed";
}
}

?>