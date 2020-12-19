<?php
require("conexion.php");
$palabra=$_POST["palabra"];
$sql="SELECT descripcion.texto FROM `descripcion` INNER JOIN palabra_reservada ON 
palabra_reservada.id_iddescripcion=descripcion.id_descripcion WHERE palabra_reservada.reservada='$palabra'";
$consulta= mysqli_query( $cone, $sql);
$row=mysqli_fetch_row($consulta);
$resultados =$row[0];
echo $resultados;
?>