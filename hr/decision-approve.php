<?php
// akceptacja wniosku pracownika
$connection = mysqli_connect('localhost','root','','application');

$app_ID = $_COOKIE['clickedID']; 

$sel_app_info = mysqli_query($connection, "UPDATE `vacation_log` SET status = 'Zaakceptowane' WHERE application_id=$app_ID") or exit(mysqli_error($connection));

?>