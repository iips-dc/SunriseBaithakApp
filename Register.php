

<?php
    $con=mysqli_connect("localhost","root","","sencha");
    header('Access-Control-Allow-Origin: *');

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        header('Access-Control-Allow-Headers: origin, X-Requested-With, Authorization, Content-Type');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
        exit;
    }
    
    header('Content-type: application/json');
	$fname=$_POST['FirstName'];
	$lname=$_POST['LastName'];
	$email=$_POST['Email'];
	$cno=$_POST['Contact'];
	$occ=$_POST['Occupation'];
	mysqli_query($con,"INSERT INTO bathak (fname,lname,email,cno,occupation,address) 
VALUES ('$fname','$lname','$email','$cno','$occ','sunriseform')");

mysqli_close($con);
    $response = array(
        'success' => true,
        'message' => 'Success: ' . $_POST["Email"] . " " . $_POST["Address"]
    );
    echo json_encode($response);
?>
