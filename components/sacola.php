<?php
include_once 'conexao.php';
session_start();


$userID = $_SESSION['id'];




$query = "SELECT * FROM `sacola` WHERE idUser = '$userID'";
// $query = "select idEsta from estabelecimento_info where idEsta = '$id'";
if ($result = mysqli_query($conn, $query)) {
    while ($row_usuario = mysqli_fetch_assoc($result)) {
        $nomePratoSacola = $row_usuario['nome'];
        $imgPratoSacola = $row_usuario['foto'];
        $idItem = $row_usuario['id'];
        $valorPratoSacola2 = $row_usuario['valor'];
        $quantidade = $row_usuario['quant'];
        $valorPratoSacola3 = str_replace(',', '.', $valorPratoSacola2);
        $valorPratoSacola = $valorPratoSacola3 * $quantidade;
        $valorPratoSacola = number_format($valorPratoSacola, 2, '.', '');
        $valorPratoSacola = str_replace('.', ',', $valorPratoSacola);

        echo "
       
       <div class='pratosList2 pratoEx$idItem' data-prato='prato$idItem'>
       <hr>
                  <div>
            <img class='fotoPrato' width='100px' src='estabelecimento/proc/$imgPratoSacola'>
            <h4>$nomePratoSacola </h4>
            <p class='colorp'>
               Mais informações >
            </p>
            <p class='valorPrato'>
            R$ <span class='valorPrato2 classe$idItem'>$valorPratoSacola2</span>
            /unidade<br>
            <a class='excludeP' data-prato='#itemSacola$idItem' data-name='.pratoEx$idItem' data-valorpr='.classe$idItem'>excluir prato</a>
            <span class='addSacola1'>
            <a data-val='$valorPratoSacola3' data-idprato='$idItem' data-id='#itemSacola$idItem' data-classe='.itemSacola$idItem' class='removeItem removeTP$idItem'> - </a> 
           
            <input id='itemSacola$idItem' class='addSacola2 todosPr' data-ident='.removeTP$idItem' value='$quantidade' type='text'>
            <a data-val='$valorPratoSacola3' data-idprato='$idItem' data-id='#itemSacola$idItem' data-classe='.itemSacola$idItem' class='addItem'> + </a>
            
            </span>
            </p>
           <p hidden class='queryPHP itemSacola$idItem'></p>
                             
        </div>
        </div>
        ";
    }
} else {
    echo "vazio";
}

?>
<div class="pratosList2 positionBottom" style="padding-top:5vh;">
    <div class="container">
        <div class="dLeft">
            <h4>TOTAL NA BANDEJA</h4>
        </div>
        <div class="dRight">
            <p class="valorNNN">

            </p>
        </div>
        <br>
        <br>
        <div>
            <a href="#qrcode" class="btnqr">
                FINALIZAR
            </a>
        </div>
    </div>
</div>