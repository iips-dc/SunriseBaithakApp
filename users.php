<?php
$con=mysqli_connect("localhost","root","","sencha");
//$id = $_POST['id'];
header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
$in=file_get_contents('php://input');
 $h= json_decode($in);
//$id=$_POST['id'];
$name=$_POST['name'];
$email=$_POST['email'];
$phone = $_POST['phone'];

echo($id);
mysqli_query($con,"INSERT INTO bathak (name) 
VALUES ('$name')");

mysqli_close($con);

?>