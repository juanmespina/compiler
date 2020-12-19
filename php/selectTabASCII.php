<?php
$resultados= array();
require("conexion.php");
  for ($i=1; $i < 90; $i++)
    {$sql="SELECT tablaascii.codigo,tablaascii.simbolo FROM `tablaascii` WHERE `id_tablaASCII`=$i" ;
      $consulta= mysqli_query( $cone, $sql);
      $row=mysqli_fetch_row($consulta);
      $indice=$i-1;
      $resultados[$indice]=$row;}
    echo (json_encode($resultados));
?>