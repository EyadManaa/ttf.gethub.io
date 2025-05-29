<?php


$name = $_POST['name'];
$email = $_POST['email'];
$feedBack = $_POST['feedBack'];
include "connection.php";

$sql ="INSERT INTO feed(name,email,feedBack) VALUES('$name','$email','$feedBack')";

mysqli_query($con , $sql) or die(mysqli_error($con));
 
header("location:index.html")
?>
