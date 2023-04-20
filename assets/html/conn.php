<?php

$data1=$_POST['fy_name'];
$data2=$_POST['inlineRadioOptions'];
$data3=$_POST['fy_tel'];
$data4=$_POST['fy_email'];
$data5=$_POST['fy_class'];
$data6=$_POST['fy_headclass'];
$data7=$_POST['fy_faceclass'];
$data8=$_POST['fy_bodyclass'];
$data9=$_POST['fy_footclass'];
$data10=$_POST['fy_spaceclass'];
$data11=$_POST['fy_product'];
$data12=$_POST['fy_fy_location'];
$data13=$_POST['fy_master'];
$data14=$_POST['fy_date'];
$data15=$_POST['fy_time'];
$data16=$_POST['message'];


$host = 'sql206.byethost16.com';
$db_name = 'b16_32461521_msg';
$db_user = 'b16_32461521'; 
$db_password = 'qaz00000';

$con = mysqli_connect($host, $db_user, $db_password, $db_name);
    if (!$con) {
die("Connection failed: " . mysqli_connect_error());
}


//資料庫是否正常使用

if(!mysqli_select_db($con, $db_name)) {
die ("資料庫連線異常！");
}

mysqli_query( $con, "set names 'utf8'");

//執行SQL語法

// $sql ="INSERT INTO `board` (`fy_id`,`fy_name`,`inlineRadioOptions`,`fy_tel`,`fy_email`,`fy_class`,`fy_headclass`,`fy_faceclass`,`fy_bodyclass`,`fy_footclass`,`fy_spaceclass`,`fy_product`,`fy_location`,`fy_master`,`fy_date`,`fy_time`,`fy_message`) VALUES ('')";
// $result = mysqli_query($con, $sql);





?>