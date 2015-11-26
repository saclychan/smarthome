<?php 
	$room = $_POST['room'];
	$floor = $_POST['floor'];
	$deviceId = $_POST['deviceId'];

	$xml = '<?xml version="1.0" encoding="UTF-8"?>';
	$xml .= '<data>';
	$xml .= '<floor>'.$floor.'</floor>';
	$xml .= '<room>'.$room.'</room>';
	$xml .= '<deviceId>'.$deviceId.'</deviceId>';

	$xml .= '</data>';
	echo $xml;
?>