<?php 
include_once 'conexao.php';
session_start();
$id = $_POST['id'];

$query = "SELECT * FROM `estabelecimento_Info2` WHERE id = '$id'";
// $query = "select idEsta from estabelecimento_info where idEsta = '$id'";
if ($result = mysqli_query($conn, $query)) {
    while ($row_usuario = mysqli_fetch_assoc($result)) {
        $nome = $row_usuario['nome'];
        $idEsta = $row_usuario['idEsta'];
        $categoria = $row_usuario['categoria'];
        $telefone = $row_usuario['telefone'];
        $dia1 = $row_usuario['dia1'];
        $dia2 = $row_usuario['dia2'];
        $horas1 = $row_usuario['horas1'];
        $horas2 = $row_usuario['horas2'];
        $query2 = "SELECT * FROM `estabelecimento_Info` WHERE idEsta = '$idEsta'";
        if ($result2 = mysqli_query($conn, $query2)) {
            $row_usuario2 = mysqli_fetch_assoc($result2);
            $cnpj = $row_usuario2['cnpj'];
            $cep = $row_usuario2['cep'];
            $logradouro = $row_usuario2['logradouro'];
            $cidade = $row_usuario2['cidade'];
            $estado = $row_usuario2['estado'];
            $bairro = $row_usuario2['bairro'];
            $numero = $row_usuario2['numero'];

        }
        echo "
        <div>
        
        <h4>
        <a class='voltarInfo'>
        <img class='' src='assets/img/icon/back.png' width='20px'> 
         </a>
         MAIS INFROMAÇÕES</h4>
        </div>
        <hr>
               <p>
                    $nome 
                    <br>
                    $categoria
                    <br>
                    $telefone
                    <br>
                    Dias de funcionamento: 
                    De $dia1 a $dia2 <br>
                    Horário de atendimento: 
                    das $horas1 ás $horas2 
                    <br><br>
                    CNPJ: $cnpj 
                    <br>
                    $cep, $logradouro, $bairro
                    <br>
                    $cidade, $estado, $numero 

                </p>
                
        ";
    }
}
