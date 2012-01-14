<?php

$id = $_POST["id"];
$action = $_POST["action"];

db_connect();
cardanswer_right(0);

//What Action next
switch ($action) {
case "right":
	cardanswer_right($id);
	break;
case "wrong":
	cardanswer_wrong($id);
}

//Connection to SQL Database
function db_connect() {
$connect = mysql_connect('db2414.1und1.de', 'dbo323669145', 'x4djkuT1!d');
mysql_select_db("db323669145");

if(!$connect){
	die('Fehler: ' . mysql_error());
}
echo 'Passt!';
}

//If Answer right do following
function cardanswer_right ($id) {
$query = "UPDATE kh_card SET c_level_id = c_level_id+1, c_levelstarted = NOW() 
WHERE c_ID = $id";

$query = "select 2 from dual";

$result = mysql_query($query);
print_r($result);
$query = "SELECT c_level_id from kh_card 
WHERE c_ID = $id";

$result = mysql_query($query);

$res = mysql_fetch_array($result);
echo $res["c_level"];
}

//If Answer wrong do following
function cardanswer_wrong ($id){
$query = sprintf("UPDATE kh_card SET c_level = 1, c_levelstarted = NOW() 
WHERE c_ID = $id");

$result = mysql_query($query);

echo $result;
} 

//
function createBox () {
$query = sprintf("INSERT kh_box ");

$result = mysql_query($query);
}

//
function createCard () {
$query = sprintf("INSERT");

$result = mysql_query($query);
}





?>