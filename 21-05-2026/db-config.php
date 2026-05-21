<?php
//local
//define("DB_HOST", "localhost");
//define("DB_USER", "root");
//define("DB_PASS", "");
//define("DB_NAME", "round_70")

//hosting
//define("DB_HOST", "xyz.com");
//define("DB_USER", "round_70");
//define("DB_PASS", "54612968");
//define("DB_NAME", "round_70")

//new mysqli (host, user, password, database);
$db = new  mysqli("localhost", "root", "", "new_round_70");

if ($db->connect_error) {
    die("Connection failed : " . $db->connect_error);
}else {
    echo "Connected Successfully";
}

?>