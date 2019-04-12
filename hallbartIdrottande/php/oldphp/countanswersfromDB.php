<?php
//THIS IS THE PAGE WHERE WE COUNT NUMBER OF A, B and C answers

$con=mysqli_connect("localhost","webutb_dummy","webutb_dummy1!","webutb_dummy"); 
// Check connection


$questiondata =  "Inom vilket område arbetar du?"; //$_GET['question'];



if (mysqli_connect_errno())
  {
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


$result = mysqli_query($con,"SELECT answer FROM ANSWERS GROUP BY user ORDER BY time DESC");


echo json_encode($result);


mysqli_close($con);
?>