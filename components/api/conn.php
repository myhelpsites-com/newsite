<?php
define('HOST', 'sql177.main-hosting.eu');
define('USUARIO', 'u251004859_react_mhs');
define('SENHA', 'React_mhs@2021');
define('DB', 'react_mhs');


$conn = mysqli_connect(HOST, USUARIO, SENHA, DB) or die('<script>
console.log("Banco de dados não conectado.")
</script>
');

// if (!$conn) {
//    exit;
// } else {
    
// }
