<?php

$host = 'mysql';
$db   = 'wallpapers';
$user = 'root';
$pass = 'test123';
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

//create an object for connection to Data Base
$pdo = new PDO($dsn, $user, $pass, $opt);

//get a table name from GET parameter
$table = $_GET['table'];

//string of filtering
$filterStr = '';

//check if 'id' is created, then
if (isset($_GET['id']) && $_GET['id'] > 0) {
    $filterStr = $filterStr . " WHERE id = " . $_GET['id'];
}

// create variable with name sqlText
$sqlText = "SELECT * FROM " . $table . $filterStr;
echo $sqlText . '<br>';

//Data reading
//Fetch data from data base
$result = $pdo->query($sqlText);

$users = [];

//cut each string from result and show each as an array
while($row = $result->fetch()) {

    //look the date one of string
    // echo $row['first_name'] . " " . $row['last_name'] . "<br>";
    $users [] = $row;
}

//encode and display (array)
echo json_encode($users);

// $row = $result->fetch();

// echo $row['first_name'] . " " . $row['last_name'];