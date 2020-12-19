<?php
$palabra=$_POST["palabra"];
require("conexion.php");
$sql="SELECT palabra_reservada.reservada FROM palabra_reservada WHERE palabra_reservada.reservada='$palabra'";
$consulta= mysqli_query( $cone, $sql);

if (!$consulta || mysqli_num_rows($consulta) == 0) {
  
  echo 'false' ; 
}else {
  echo 'true';
}

?>