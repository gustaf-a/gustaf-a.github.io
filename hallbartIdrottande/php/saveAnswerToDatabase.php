
<?php
//THIS IS THE PAGE WHERE WE SAVE ONE ANSWER TO THE DATABASE
/*
require_once('FirePHPCore/FirePHP.class.php');
ob_start();
$firephp = FirePHP::getInstance(true);
 

 */



//$con=mysqli_connect("localhost","wp_mf_utb","Wnbb53*279n7P6Q","wp_mf_utb"); //GBG
$con=mysqli_connect("localhost","reslust","reslust1!","reslust"); //GR 
// Check connection
if($con == false){
   echo "did not connect";
}

$useriddata = $_GET['ID'];
$questioniddata =utf8_decode($_GET['question_id']);
$questiondata =utf8_decode($_GET['question']);
$answeriddata = $questioniddata . "_" . utf8_decode($_GET['answer_id']);
$answerdata = utf8_decode($_GET['answer']);
//$nrofanswersdata = utf8_decode($_GET['nrofanswers']);

//$result = mysqli_query($con,"SELECT * FROM utb_answers WHERE user='$useriddata' AND question_id='$questioniddata'"); 
$result = mysqli_query($con,"SELECT * FROM ANSWERS WHERE user='$useriddata' AND question_id='$questioniddata'"); 
$count = $result->num_rows;

//$firephp->log($result, 'Result');
//$firephp->log($count, 'mysql_num_rows');

if ($count==0) { 
	
  /*
   $sql="INSERT INTO utb_answers (ID, user, question_id, question, answer_id, answer, time)
	VALUES ('','$useriddata','$questioniddata','$questiondata','$answeriddata','$answerdata', null)";
*/
	 $sql="INSERT INTO ANSWERS (ID, user, question_id, question, answer_id, answer, time)
	VALUES ('','$useriddata','$questioniddata','$questiondata','$answeriddata','$answerdata', null)"; //GR

//	$firephp->log($sql, 'insert');

} else { 
	
		/*
	   $sql="UPDATE utb_answers 
	   		SET answer_id='$answeriddata', answer='$answerdata'
	   		WHERE user='$useriddata' AND question_id='$questioniddata'";
*/
	   	
 $sql="UPDATE ANSWERS 
	   		SET answer_id='$answeriddata', answer='$answerdata'
	   		WHERE user='$useriddata' AND question_id='$questioniddata'";
	   		

	//$firephp->log(utf8_decode($sql), 'update');
}  

//mysqli_query($con,$sql);

if(mysqli_query($con,$sql)) {
	 $myCount=mysqli_query($con,"SELECT answer_id, COUNT(*) as count FROM ANSWERS WHERE question_id='$questioniddata'  GROUP BY answer_id");
		$results = array();
		$nrOfAnswers =0;
	 	  


	 while($row = mysqli_fetch_array($myCount)) {
	 	$answer = $row['answer_id'];
	 	$count = $row['count'];
	 	$nrOfAnswers = $nrOfAnswers + $count;
	 	$results[] = array('answer' => array('id'=>$answer, 'count' => $count));
	 }
	 $results[] = array('total' => $nrOfAnswers);
	 echo json_encode($results);
}



mysqli_close($con);
?>