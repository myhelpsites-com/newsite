<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'conn.php';
session_start();


$query = "SELECT * FROM `teste`";
// $query = "select idEsta from estabelecimento_info where idEsta = '$id'";
if ($result = mysqli_query($conn, $query)) {
    while ($row_usuario = mysqli_fetch_assoc($result)) {
        $nome = $row_usuario['nome'];
       
        echo json_encode("$nome");
    }
} else {
    echo "vazio";
}

