<?php
/*
require_once('FirePHPCore/FirePHP.class.php');
ob_start();
$firephp = FirePHP::getInstance(true);
 */
//$con=mysqli_connect("localhost","webutb_dummy","webutb_dummy1!","webutb_dummy"); //GR
$con=mysqli_connect("localhost","reslust","reslust1!","reslust"); //GR 


$question_id =  $_GET['question_id'];



if (mysqli_connect_errno())
  {
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

mysql_query('SET CHARACTER SET utf8');
//$result = mysqli_query($con,"SELECT user, answer, answer_id, question, question_id, time FROM utb_answers"); // GBG
$result = mysqli_query($con,"SELECT user, answer, answer_id, question, question_id, time FROM ANSWERS"); // GR

//$firephp->log($result, 'Result');
//$firephp->log($count, 'mysql_num_rows');

$results = array();

while($row = mysqli_fetch_array($result))
{
	
	$results[]= array_map('utf8_encode', $row);
}
//echo "RESULT:<br>A:" . $nrOfA . "<br>B:" .$nrOfB . "<br>C:" .$nrOfC . "<br><br>" ."Total: " .$nrOfAnswers. "<br>done";
echo json_encode($results);


mysqli_close($con);

?>