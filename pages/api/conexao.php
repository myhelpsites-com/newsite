<?php
define('HOST', 'sql177.main-hosting.eu');
define('USUARIO', 'u251004859_react_mhs');
define('SENHA', 'React_mhs@2021');
define('DB', 'u251004859_react_mhs');


$conn = mysqli_connect(HOST, USUARIO, SENHA, DB) or die('<script>
console.log("Banco de dados não conectado.")
</script>
');

$query = "SELECT * FROM `teste`";
// $query = "select idEsta from estabelecimento_info where idEsta = '$id'";
if ($result = mysqli_query($conn, $query)) {
    while ($row_usuario = mysqli_fetch_assoc($result)) {
        $nome = $row_usuario['nome'];

    }
    echo json_encode($result);
}