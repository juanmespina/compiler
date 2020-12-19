<?php
$resultados= array();
require("conexion.php");
  for ($i=1; $i < 80; $i++)
    {$sql="SELECT `simbolo` FROM `caracter` WHERE id_caracter=$i" ;
      $consulta= mysqli_query( $cone, $sql);
      $row=mysqli_fetch_row($consulta);
      $indice=$i-1;
      $resultados[$indice] =$row[0];}
$cadena=implode($resultados);
echo $cadena;

?>