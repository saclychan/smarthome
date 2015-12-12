<?php 
	$value = $_POST['value'];
	$deviceStatus = $_POST['deviceStatus'];
	$deviceId = $_POST['deviceId'];

	$xml = '<?xml version="1.0" encoding="UTF-8"?>';
	$xml .= '<data>';
	$xml .= '<deviceId>'.$deviceId.'</deviceId>';
	$xml .= '<deviceStatus>'.$deviceStatus.'</deviceStatus>';
	$xml .= '<value>'.$value.'</value>';

	$xml .= '</data>';
	echo $xml;
?>