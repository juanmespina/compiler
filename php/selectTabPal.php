<?php
$resultados= array();
require("conexion.php");
  for ($i=1; $i < 37; $i++)
    {$sql="SELECT palabra_reservada.reservada,descripcion.texto FROM `descripcion` INNER JOIN palabra_reservada ON palabra_reservada.id_iddescripcion=descripcion.id_descripcion WHERE palabra_reservada.id_reservada=$i" ;
      $consulta= mysqli_query( $cone, $sql);
      $row=mysqli_fetch_row($consulta);
      $indice=$i-1;
      $resultados[$indice]=$row;}
    echo (json_encode($resultados));
?>