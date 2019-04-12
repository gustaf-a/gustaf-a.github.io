


<?php


//THIS IS THE PAGE WHERE WE SAVE ONE ANSWER TO THE DATABASE
$con=mysqli_connect("localhost","reslust","reslust1!","reslust"); //GR 
//$con=mysqli_connect("localhost","webutb_dummy","webutb_dummy1!","webutb_dummy"); //GR 
// Check connection
if($con == false){
   echo "did not connect";
} 

$questiondata = $_GET['question_id'];



$col1_k = isset($_GET['col1']) ? $_GET['col1'] : 0;
$col2_k = isset($_GET['col2']) ? $_GET['col2'] : 0;
$col3_k = isset($_GET['col3']) ? $_GET['col3'] : 0;
$col4_k = isset($_GET['col4']) ? $_GET['col4'] : 0;
$col5_k = isset($_GET['col5']) ? $_GET['col5'] : 0;
$col6_k = isset($_GET['col6']) ? $_GET['col6'] : 0;
$col7_k = isset($_GET['col7']) ? $_GET['col7'] : 0;
$col8_k = isset($_GET['col8']) ? $_GET['col8'] : 0;
$col9_k = isset($_GET['col9']) ? $_GET['col9'] : 0;
$col10_k = isset($_GET['col10']) ? $_GET['col10'] : 0;
$col11_k = isset($_GET['col11']) ? $_GET['col11'] : 0;
$col12_k = isset($_GET['col12']) ? $_GET['col12'] : 0;
$col13_k = isset($_GET['col13']) ? $_GET['col13'] : 0;
$col14_k = isset($_GET['col14']) ? $_GET['col14'] : 0;
$col15_k = isset($_GET['col15']) ? $_GET['col15'] : 0;
$col16_k = isset($_GET['col16']) ? $_GET['col16'] : 0;



$sql="UPDATE CLICKWORDS SET col1 = col1 + $col1_k, col2 = col2 + $col2_k, col3 = col3 + $col3_k, col4 = col4 +$col4_k, col5 = col5 + $col5_k, col6 = col6 + $col6_k, col7 = col7 +$col7_k, col8 = col8 + $col8_k, col9 = col9 + $col9_k, col10 = col10 + $col10_k, col11 = col11 + $col11_k, col12 = col12 + $col12_k, col13 = col13 + $col13_k, col14 = col14 + $col14_k, col15 = col15 + $col15_k, col16 = col16 + $col16_k WHERE question_id = $questiondata";


if(mysqli_query($con,$sql)) {


$result = mysqli_query($con,"SELECT * FROM CLICKWORDS WHERE question_id=$questiondata");


$nrOf1= 0;
$nrOf2= 0;
$nrOf3= 0;
$nrOf4= 0;
$nrOf5= 0;
$nrOf6= 0;
$nrOf7= 0;
$nrOf8= 0;
$nrOf9= 0;
$nrOf10= 0;
$nrOf11= 0;
$nrOf12= 0;
$nrOf13= 0;
$nrOf14= 0;
$nrOf15= 0;
$nrOf16= 0;

$nrOfAnswers= 0;

$results = array();

while($row = mysqli_fetch_array($result))
{
	$nrOf1 = $row['col1'];
	$nrOf2 = $row['col2'];
	$nrOf3 = $row['col3'];
	$nrOf4 = $row['col4'];
	$nrOf5 = $row['col5'];
	$nrOf6 = $row['col6'];
	$nrOf7 = $row['col7'];
	$nrOf8 = $row['col8'];
	$nrOf9 = $row['col9'];
	$nrOf10 = $row['col10'];
	$nrOf11 = $row['col11'];
	$nrOf12 = $row['col12'];
	$nrOf13 = $row['col13'];
	$nrOf14 = $row['col14'];
	$nrOf15 = $row['col15'];
	$nrOf16 = $row['col16'];
	$nrOfAnswers = $nrOf1+$nrOf2+$nrOf3+$nrOf4+$nrOf5+$nrOf6+$nrOf7+$nrOf8+$nrOf9+$nrOf10+$nrOf11+$nrOf12+$nrOf13+$nrOf14+$nrOf15+$nrOf16;
  }

$results[] = array(
	 	  'col1' =>  array(
          					'selected'=>$col1_k,
          					'value' => $nrOf1),
          'col2' =>  array(
          					'selected'=>$col2_k,
          					'value' => $nrOf2),
          'col3' =>  array(
          					'selected'=>$col3_k,
          					'value' => $nrOf3),
          'col4' =>  array(
          					'selected'=>$col4_k,
          					'value' => $nrOf4),
          'col5' =>  array(
          					'selected'=>$col5_k,
          					'value' => $nrOf5),
          'col6' =>  array(
          					'selected'=>$col6_k,
          					'value' => $nrOf6),
          'col7' =>  array(
          					'selected'=>$col7_k,
          					'value' => $nrOf7),
          'col8' =>  array(
          					'selected'=>$col8_k,
          					'value' => $nrOf8),
          'col9' =>  array(
          					'selected'=>$col9_k,
          					'value' => $nrOf9),
          'col10' =>  array(
          					'selected'=>$col10_k,
          					'value' => $nrOf10),
          'col11' =>  array(
          					'selected'=>$col11_k,
          					'value' => $nrOf11),
          'col12' =>  array(
          					'selected'=>$col12_k,
          					'value' => $nrOf12),
          'col13' =>  array(
          					'selected'=>$col13_k,
          					'value' => $nrOf13),
          'col14' =>  array(
          					'selected'=>$col14_k,
          					'value' => $nrOf14),
          'col15' =>  array(
          					'selected'=>$col15_k,
          					'value' => $nrOf15),
          'col16' =>  array(
          					'selected'=>$col16_k,
          					'value' => $nrOf16),
        /*  'Lycka' =>  array(
          					'selected'=>$col1_k,
          					'value' => $nrOf1),
          'Lättnad' =>  array(
          					'selected'=>$col2_k,
          					'value' => $nrOf2),
          'Stress' =>  array(
          					'selected'=>$col3_k,
          					'value' => $nrOf3),
          'Maktlös' =>  array(
          					'selected'=>$col4_k,
          					'value' => $nrOf4),
          'Makt' =>  array(
          					'selected'=>$col5_k,
          					'value' => $nrOf5),
          'Pirr' =>  array(
          					'selected'=>$col6_k,
          					'value' => $nrOf6),
          'Kåt' =>  array(
          					'selected'=>$col7_k,
          					'value' => $nrOf7),
          'Kärlek' =>  array(
          					'selected'=>$col8_k,
          					'value' => $nrOf8),
          'Osäker' =>  array(
          					'selected'=>$col9_k,
          					'value' => $nrOf9),
          'Trygg' =>  array(
          					'selected'=>$col10_k,
          					'value' => $nrOf10),
          'Försiktig' =>  array(
          					'selected'=>$col11_k,
          					'value' => $nrOf11),
          'Skam' =>  array(
          					'selected'=>$col12_k,
          					'vlue' => $nrOf12),
          'Nyfiken' =>  array(
          					'selected'=>$col13_k,
          					'value' => $nrOf13),
          'Rädd' =>  array(
          					'selected'=>$col14_k,
          					'value' => $nrOf14),
          'Oro' =>  array(
          					'selected'=>$col15_k,
          					'value' => $nrOf15),
          'Respekt' =>  array(
          					'selected'=>$col16_k,
          					'value' => $nrOf16),
          					*/
          'total' => $nrOfAnswers
       );
       
//echo "RESULT:<br>1:" . $nrOf1 . "<br>B:" .$nrOf8 . "<br>C:" .$nrOf16 . "<br><br>" ."Total: " .$nrOfAnswers. "<br>done";
echo json_encode($results);


}else {
	 printf("Error 2: %s\n", mysqli_error($con));
}



mysqli_close($con);

?>