//Inicio Analisis Lexico
var arrCarRecibido=new Array();
var arrPalabras=new Array();
var arrSemantico=new Array();
var nombreVar= new Array();
var valorVar= new Array();
var tipoVar=  new Array();
var error;
var iMiembros=0;
var contador=0;

function lexico() {
 limpiarTxtSalida();
 var texto= document.getElementById("txtIngreso").value ;
 var SinSaltos=texto.replace(/(\r?\n|\r)/g, "");
 var SinEsp=SinSaltos.replace(/ /g, "");
 $("#txtSalida").append("=======================================================\n");
 $("#txtSalida").append("Análisis Léxico\n");
 $("#txtSalida").append("=======================================================\n");
 $("#txtSalida").append("Espacios ("+(texto.length-SinEsp.length)+")\n" );
 arrCarRecibido=comprobarCar();
    for (let index = 0; index < arrCarRecibido.length; index++) {
      if (arrCarRecibido[index]=="]") {
       caracLadilla(SinEsp);
      }//if
      else{ 
      var regex = new RegExp("[^"+arrCarRecibido[index]+"]","g");
       if (SinEsp.replace(regex, "").length >0) {
        $("#txtSalida").append(arrCarRecibido[index]+ " se repite "+SinEsp.replace(regex, "").length +" veces\n"); }
      }//else
    }//for
caracNoPermit(SinEsp);
}//validar    

function caracLadilla(SinEsp)
{if ((SinEsp.split("]").length-1) >0) {
    $("#txtSalida").append(" ] se repite "+(SinEsp.split("]").length-1)  +" veces\n"); }//if
}//caracLadilla


function caracNoPermit(SinEsp){
  var booleano=false;
  for (let i = 0; i < SinEsp.length; i++) {
     if (arrCarRecibido.includes(SinEsp[i])==false) {
       $("#txtSalida").append(SinEsp[i]+ " INVALIDO\n"); 
       booleano= true;
       document.getElementById("btnSintactico").disabled=true;}//if
    else{
      if (booleano==true) {
        document.getElementById("btnSintactico").disabled=true;
        document.getElementById("btnSemantico").disabled=true;}//if2
        else{
         document.getElementById("btnSintactico").disabled=false;
         document.getElementById("txtIngreso").disabled=true; }//else2 
    }//else1
  }//for
}//caracNoPermit   
// Fin analisis lexico

//Inicio sintáctico
function sintactico(){
  var texto= document.getElementById("txtIngreso").value ;
  var SinSaltos=texto.replace(/(\r?\n|\r\s)/g," ");
  arrPalabras=SinSaltos.trim().split(" ");
  arrPalabras=limpiarArr( arrPalabras);
  for (let  i= 0; i < arrPalabras.length; i++) {
    if (comprobarPal(arrPalabras[i])=='false') {
        quitarParen(arrPalabras[i],i);}
    else{
        $("#txtSalida").prepend(arrPalabras[i]+" es "+comprobarDesc(arrPalabras[i])+"\n");
    }//else
  }//for
  document.getElementById("btnSemantico").disabled=false;
  $("#txtSalida").prepend("=======================================================\n");
  $("#txtSalida").prepend("Análisis Sintáctico\n");
  $("#txtSalida").prepend("=======================================================\n");
}//sintactico

function quitarParen(palabra,i){
  switch (palabra) {
    case 'if(':
    $("#txtSalida").prepend("( es  otras palabras\n");
    $("#txtSalida").prepend("if es "+comprobarDesc('if')+"\n");
    break;

    case 'for(':
    $("#txtSalida").prepend("( es  otras palabras\n");
    $("#txtSalida").prepend("for es "+comprobarDesc('for')+"\n");
    break
    case 'while(':
    $("#txtSalida").prepend("( es  otras palabras\n");
    $("#txtSalida").prepend("while es "+comprobarDesc('while')+"\n");
    break

    case 'for(':
    $("#txtSalida").prepend("( es  otras palabras\n");
    $("#txtSalida").prepend("for es "+comprobarDesc('for')+"\n");
    break
    case 'else{':
    $("#txtSalida").prepend("{ es  otras palabras\n");
    $("#txtSalida").prepend("else es "+comprobarDesc('else')+"\n");
    break
    default:
    $("#txtSalida").prepend(arrPalabras[i]+" es  otras palabras\n");
    break;
  }//switch
}//quitarParen
//fin sintactico



//inicio semantico
function semantico(){
  
  var texto= document.getElementById("txtIngreso").value ;
  arrSemantico=texto.trim().split(/(\r?\n|\r|\s|\t)/);
  arrSemantico=limpiarArr(arrSemantico);
  console.log(arrSemantico);
  
    if (arrSemantico[0]=="programa") {
        if(arrSemantico[3]=="inicio"){
          if (arrSemantico[arrSemantico.length-1]=="fin") {
            
            for (let i = 5 ; i< (arrSemantico.length-1); i++) {
              
              i=primeraPalabraClave(i,arrSemantico);
              
            }//for
          }//if3
          else{
            errorSemantico("Palabra clave 'fin' no encontrada");
          }//else3
        }//if2
        else{
          errorSemantico("Palabra clave 'inicio' no encontrada");
        }//else2
        
    }//if1
    else{
      errorSemantico("Palabra clave 'programa' no encontrada");
    }//else1

    $("#txtSalida").prepend("=====================================================\n");
    $("#txtSalida").prepend("Análisis Semántico\n");
    $("#txtSalida").prepend("=====================================================\n");   

}//semantico

function esVariable(i,arrSemantico) {

  if (arrSemantico[(i+2)]=="as") {                       
    if (arrSemantico[(i+4)]==":=") {
    switch (arrSemantico[(i+3)]) {
      
      case 'integer':     
        {if (Number.isInteger((parseFloat(arrSemantico[i+5])))==true) {
          if(otraLinea(i+6,arrSemantico)==true){
          nombreVar[contador]=arrSemantico[i+1];
          valorVar[contador]=parseInt(arrSemantico[i+5]);
          tipoVar[contador]=arrSemantico[i+3] ;
          contador++;
          return i=i+7;
          }
          else{
            return i=arrSemantico[arrSemantico.length-1]; 
          }
        }
        
        else{
          errorSemantico("Tipo no coincide con la variable integer "+ arrSemantico[(i+1)]);
          return i=arrSemantico[arrSemantico.length-1]; 
        }     
      }

     case 'float'|| 'double':
      if ((arrSemantico[i+5]%1)!=0) {
        if(otraLinea(i+6,arrSemantico)==true){
          nombreVar[contador]=arrSemantico[i+1];
          valorVar[contador]=parseFloat(arrSemantico[i+5]);
          tipoVar[contador]=arrSemantico[i+3] ;
          contador++;
          return i=i+7;
        }
        else{
          return i=arrSemantico[arrSemantico.length-1]; 
          
        }
      }
      else{
        errorSemantico("Tipo no coincide con la variable float "+ arrSemantico[(i+1)]);
        return i=arrSemantico[arrSemantico.length-1]; 
      }     
   break;

     case 'string':
      re = new RegExp(/^"$/)
      if (re.test(arrSemantico[i+5])==true) {
        if(otraLinea(i+8,arrSemantico)==true){
          nombreVar[contador]=arrSemantico[i+1];
          valorVar[contador]=arrSemantico[i+5];
          tipoVar[contador]=arrSemantico[i+3] ;
          contador++;
          return i=i+8;
        }
        else{
          return i=arrSemantico[arrSemantico.length-1]; 
        }
      }
        else{
         errorSemantico("Tipo no coincide con la variable String "+ arrSemantico[(i+1)]);
         return i=arrSemantico[arrSemantico.length-1]; 
        }     
   
      
      case 'boolean' :
      if (arrSemantico[i+5]=="true" || arrSemantico[i+5]=="false") {
        if(otraLinea(i+6,arrSemantico)==true){
          nombreVar[contador]=arrSemantico[i+1];
          valorVar[contador]=arrSemantico[i+5];
          tipoVar[contador]=arrSemantico[i+3] ;
          contador++;
          return i=i+7;
        }
        else{
          return i=arrSemantico[arrSemantico.length-1]; 
        }
      }
      else{
        errorSemantico("Tipo no coincide con la variable boolean "+ arrSemantico[(i+1)]);
        return i=arrSemantico[arrSemantico.length-1]; 
      }     
      default:
      $("#txtSalida").prepend("Error semantico sw2\n"); 
      return i=arrSemantico[arrSemantico.length-1]; 
      
    }//switch
  } //if2
    else{
    errorSemantico("Error en la declaracion");
    return i=arrSemantico[arrSemantico.length-1]; }//else2
   } //if1
  else{
    errorSemantico("Error en la declaracion");
    return i=arrSemantico[arrSemantico.length-1]; }//else1
}//esVariable

function opMate(i,arrSemantico) {
  var miembros=new Array();
  var dependiente;
  var noEsNumero=false;
  if (arrSemantico.indexOf("enmat",i)==-1) {
    errorSemantico(" No se encuentra 'enmat'");
    return i=arrSemantico[arrSemantico.length-1]; 
  }
  else{
    if (arrSemantico.indexOf(":=",i)==-1) {
      errorSemantico(" No se encuentra ':='");
      return i=arrSemantico[arrSemantico.length-1]; 
    }
    else{
      if (nombreVar.indexOf(arrSemantico[i+1])!==-1 ) {
        if ( otraLinea(arrSemantico.indexOf("enmat",i)+1, arrSemantico)==true) {
          dependiente=arrSemantico[i+1];
         
          for (let index=arrSemantico.indexOf(":=",i)+1; index < (arrSemantico.indexOf("enmat",i)); index++) {
            
            if (arrSemantico[index]=="+" ||arrSemantico[index]=="-" || arrSemantico[index]=="/" || arrSemantico[index]=="*" ||arrSemantico[index]=="(" ||arrSemantico[index]==")"||isNaN(parseFloat(arrSemantico[index]))==false) {
              miembros[iMiembros]=arrSemantico[index];
              iMiembros++;
            }
            else{
              if (isNaN((valorVar[nombreVar.indexOf(arrSemantico[index])]))==true) {
                noEsNumero=true;
              }
              else{
                miembros[iMiembros]=valorVar[nombreVar.indexOf(arrSemantico[index])];
                iMiembros++; 
              }//if6
              
            }//if4
             
          }//for
          if (noEsNumero==false) {
            var iValor=nombreVar.indexOf(dependiente);
            valorVar[iValor] =eval(miembros.join(''));
            $("#txtSalida").prepend(dependiente +" := " +valorVar[iValor]+"\n"); 
            return arrSemantico.indexOf("enmat",i)+2;    
          }
          else
          {
            errorSemantico(" No se pueden sumar numeros y cadenas"); 
            return i=arrSemantico[arrSemantico.length-1];
          }
               
        }//if5
        
      }
      else{
        errorSemantico(" Operacion Incompleta");  
        return i=arrSemantico[arrSemantico.length-1]; 
      }//if3
    }//if2
     
  }//if1
}//opMate

function esComentario(i,arrSemantico) {
  if (arrSemantico.indexOf("*/",i)==-1) {
    errorSemantico(" No se encuentra '*/'");
    return i=arrSemantico[arrSemantico.length-1]; 
  }
  else
  {
    $("#txtSalida").prepend("Comentario detectado\n");
    return (arrSemantico.indexOf("*/",i))
  }//if1
}//esComentario

function esIf(i,arrSemantico) {
  if (arrSemantico[i+1]=="(") {
    if (nombreVar.indexOf(arrSemantico[i+2])!=-1) {
      if (nombreVar.indexOf(arrSemantico[i+4])!=-1) {
        if (arrSemantico[i+5]==")") {
          if (arrSemantico[i+6]=="then") {
            if(arrSemantico.indexOf("endif",i+7)!=-1){
              if (arrSemantico.indexOf("else",i+7)!=-1){
                if (arrSemantico.indexOf("else",i+7)<arrSemantico.indexOf("endif",i+7)) {
                  if (eval(valorVar[nombreVar.indexOf(arrSemantico[i+2])]+arrSemantico[i+3]+valorVar[nombreVar.indexOf(arrSemantico[i+4])])==true) {
                    ejecutarCondicion(i+8,arrSemantico,"else");
                    i=arrSemantico.indexOf("endif", i+7);
                  }
                  else{
                    i=ejecutarCondicion((arrSemantico.indexOf("else",i+7)+2),arrSemantico,"endif");
                  }//if9
                }
              else{
                errorSemantico("Estructura errada");}//if8 
              }//if7
            else{
              if (eval(valorVar[nombreVar.indexOf(arrSemantico[i+2])]+arrSemantico[i+3]+valorVar[nombreVar.indexOf(arrSemantico[i+4])])==true) {
                ejecutarCondicion(i+8,arrSemantico,"endif");
                i=arrSemantico.indexOf("endif", i+7);
              }
              else{
                i=arrSemantico.indexOf("endif", i+7);
              }//if10
              
            }//if6
          
        } else {
          errorSemantico(" Palabra clave 'endif' no encontrada" );
          i=arrSemantico.length-2;
        }//if5
      } else {
        errorSemantico(" Palara clave 'then' no encontrada " );
        i=arrSemantico.length-2;
      }//if4
    } else {
      errorSemantico(" Condicion incompleta" );
      i=arrSemantico.length-2;
      
    }//if3
  }
  else{
    errorSemantico(" Condicion incompleta" );
    i=arrSemantico.length-2;

  }//if2

}
else{
  errorSemantico(" Condicion incompleta" );
  i=arrSemantico.length-2;  
  }//if

}
else{
  errorSemantico(" Condicion incompleta" );
  i=arrSemantico.length-2;
}
return (arrSemantico.indexOf("endif")+1);
}//esif

function esFor(i,arrSemantico) {
  if(arrSemantico[i+1]== "(" && arrSemantico[i+3]== ":=" && arrSemantico[i+5]== ";" && arrSemantico[i+9]== ";" && arrSemantico[i+11]== ")" ){
    if (arrSemantico.indexOf("endfor", i)!=-1 ) {
      
      var inicial= 0;
      var constante = arrSemantico[i+8];
      var x= 0;

      switch (arrSemantico[i+7]) {
        case '==':
        for ( inicial = arrSemantico[i+4] ; (inicial == constante ) ; inicial++){
         primeraPalabraClave(i+13,arrSemantico);
          console.log(x++);
        }
        break;

        case '<':
        for ( inicial = arrSemantico[i+4] ; (inicial < constante) ; inicial++){
          primeraPalabraClave(i+13,arrSemantico);
          console.log(x++);
        }
        break;

        case '>':
        for ( inicial = arrSemantico[i+4] ; (inicial > constante) ; inicial++){
          primeraPalabraClave(i+13,arrSemantico);
          console.log(x++);
        }
        break;

        case '>=':
        for ( inicial = arrSemantico[i+4] ; (inicial >= constante) ; inicial++){
          primeraPalabraClave(i+3,arrSemantico);
          console.log(x++);
        }
        break;

        case '<=':
        for ( inicial = arrSemantico[i+4] ; (inicial <= constante) ; inicial++){
          primeraPalabraClave(i+13,arrSemantico);
          console.log(x++);
        }
        break;
        default:
        errorSemantico("Estructura incompleta 2");
        break;
      }//switch
      
    }
    else
    {
      errorSemantico("Palabra clave 'endfor' no encontrada ")
    }
   
  }
  else{
    errorSemantico("Estructura incompleta 1")
  }
  return (arrSemantico.indexOf("endfor")+1)
}//esFor
  
function esWhile(i,arrSemantico) {
   if (arrSemantico[i+1]=="(" && arrSemantico[i+5]==")") {
    if (arrSemantico.indexOf("endwhile", i)!=-1 ) {
     if (nombreVar.indexOf(arrSemantico[i+2]!=-1)) {
       inicial=valorVar[nombreVar.indexOf(arrSemantico[i+2])];
       constante= arrSemantico[i+4];
       var x=0;
       switch (arrSemantico[i+3]) {
        case '==':
        while (inicial==constante) {
          primeraPalabraClave(i+7,arrSemantico);
          inicial=valorVar[nombreVar.indexOf(arrSemantico[i+2])];
          console.log(x++);
        }
        break;

        case '>':
        while (inicial>constante) {
          primeraPalabraClave(i+7,arrSemantico);
          inicial=valorVar[nombreVar.indexOf(arrSemantico[i+2])];
          console.log(x++);
        }
        break;

        case '>=':
        while (inicial>=constante) {
          primeraPalabraClave(i+7,arrSemantico);
          inicial=valorVar[nombreVar.indexOf(arrSemantico[i+2])];
          console.log(x++);
        }
        break;

        case '<':
        while (inicial<constante) {
          primeraPalabraClave(i+7,arrSemantico);
          inicial=valorVar[nombreVar.indexOf(arrSemantico[i+2])];
          console.log(x++);
        }
        break;
        case '<=':
        while (inicial<=constante) {
          primeraPalabraClave(i+7,arrSemantico);
          inicial=valorVar[nombreVar.indexOf(arrSemantico[i+2])];
          console.log(x++);
        }
        break;
        
        default:
        errorSemantico("Estructura incompleta. Falta simbolo condicional.");
        break;

       }//switch
     } else {
      errorSemantico("Estructura incompleta. Falta variable para la condicion(izq) ")

       
     }//if3
    } else {
      errorSemantico("Palabra clave 'endwhile' no encontrada ")
    }  //if2
   } else {
    errorSemantico("Estructura incompleta. Faltan parentesis.")
   } //if1
   return (arrSemantico.indexOf("endwhile")+1)
}//esWhile

function esDo(i,arrSemantico) {
 if (arrSemantico.indexOf("enddo",i)!=-1) {
   if (arrSemantico[arrSemantico.indexOf("enddo",i)+1]=="(" && arrSemantico[arrSemantico.indexOf("enddo",i)+5]==")" ) {
    
    constante= arrSemantico[arrSemantico.indexOf("enddo",i)+4];
    var x=0;
    switch (arrSemantico[arrSemantico.indexOf("enddo",i)+3]) {
      case '>':
      do {
        primeraPalabraClave(i+2,arrSemantico);
        inicial=valorVar[nombreVar.indexOf(arrSemantico[arrSemantico.indexOf("enddo",i)+2])];
        console.log(x++);
        
      } while (inicial>constante);
        
      break;
      case '>=':
      do {
        primeraPalabraClave(i+2,arrSemantico);
        inicial=valorVar[nombreVar.indexOf(arrSemantico[arrSemantico.indexOf("enddo",i)+2])];
        console.log(x++);
        
      } while (inicial>=constante);
        
      break;
      case '<':
      do {
        primeraPalabraClave(i+2,arrSemantico);
        inicial=valorVar[nombreVar.indexOf(arrSemantico[arrSemantico.indexOf("enddo",i)+2])];
        console.log(x++);
        
      } while (inicial<constante);
        
      break;
      case '<=':
      do {
        primeraPalabraClave(i+2,arrSemantico);
        inicial=valorVar[nombreVar.indexOf(arrSemantico[arrSemantico.indexOf("enddo",i)+2])];
        console.log(x++);
        
      } while (inicial<=constante);
        
      break;
      case '==':
      do {
        primeraPalabraClave(i+2,arrSemantico);
        inicial=valorVar[nombreVar.indexOf(arrSemantico[arrSemantico.indexOf("enddo",i)+2])];
        console.log(x++);
        
      } while (inicial==constante);
        
      break;
    
      default:
      errorSemantico(" Condicion incompleta 1" );
      break;
    }
    var x=0;
   } else {
    errorSemantico(" Condicion incompleta" ); 
   }//if2
 } else {
  errorSemantico(" Palabra clave 'enddo' no encontrada" );
 }//if1
 return arrSemantico.indexOf("enddo",i)+6 ;
}//esDo

function primeraPalabraClave(i,arrSemantico){
  switch (arrSemantico[i]) {
    case 'var':
    i= esVariable(i,arrSemantico);
         
    break;
    
    case 'inimat':
     i=opMate(i,arrSemantico);
      
    break;
    
    case '/*':
     i=esComentario(i,arrSemantico);
    
    break;

    case '\n':
    
    break;
    
    case 'if':
      i=esIf(i,arrSemantico);
    break;

    case 'for':
      i=esFor(i,arrSemantico);
    break;
    
    case 'while':
    i=esWhile(i,arrSemantico);
    break;

    case 'do':
    i=esDo(i,arrSemantico);
    break;
  
    default:
    errorSemantico("Error Semántico sw1");
    i=arrSemantico[arrSemantico.length-1]; 
    break;
  }//switch
  return i++;
}//primerPalabraClaves

function ejecutarCondicion(i,arrSemantico,palClave) {
  for (index = i; index <(arrSemantico.indexOf(palClave,i+7)-2) ; index++){
    index=primeraPalabraClave(index, arrSemantico);
  }//for
return index;
}//ejecutarCondicion

function otraLinea(i, arrSemantico) {
  if (arrSemantico[i]==";") {
    if (arrSemantico[i+1]=="\r" || arrSemantico[i+1]=="\n") {
      
      return true;
    }//if2
    else{
      errorSemantico("No hay salto de linea");
      return false;
    }
  }//if1
  else
  {
    errorSemantico(" No se encuentra ; al final de la linea");
    return false;
  }
}//otraLinea

function errorSemantico(error){
  $("#txtSalida").prepend(error +"\n");}
//FinSemantico


//extras
function verificar(){
  if(document.getElementById("txtIngreso").value.length<=0)
  {document.getElementById("btnCorrer").disabled = true;
    document.getElementById("btnSintactico").disabled=true;
    document.getElementById("btnSemantico").disabled=true;
}
  else 
  {document.getElementById("btnCorrer").disabled = false;}
}//verificar
      
function limpiarTxtSalida(){
  document.getElementById("txtSalida").innerHTML="";
}//limpiarTxtSalida

function limpiarArr( arrPalabras){
    var re=/ \s /;
    var re1=/ /;
    var re2=/[ ]/;
    for (let i = 0; i < arrPalabras.length; i++) {
      if (arrPalabras[i]=="" || arrPalabras[i]==null || re.test(arrPalabras[i])|| re1.test(arrPalabras[i]) || re2.test(arrPalabras[i])  ) {
        arrPalabras.splice(i,1);
        i=i-1;}//if
    }//for
  return arrPalabras;
  }//limpiarr
//FinExtras