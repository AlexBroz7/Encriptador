function imgChange(sw)
{
       if(sw == 0){
              var pic;
              pic = "pulgar.gif";
              document.getElementById("img-change").src = pic;
       }
       else {
              var pic;
              pic = "Muñeco.png";
              document.getElementById("img-change").src = pic;
       }    
}

function encriptar(){
      let texto = document.getElementById("input").value;
      var txtCifrado = texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
      var txtCifrado = txtCifrado.replace(/e/g,"enter");
      var txtCifrado = txtCifrado.replace(/o/g,"ober");
      var txtCifrado = txtCifrado.replace(/i/g,"imes");
      var txtCifrado = txtCifrado.replace(/a/g,"ai");
      var txtCifrado = txtCifrado.replace(/u/g,"ufat");
      document.getElementById("exito").innerHTML= "Mensaje cifrado";
      imgChange(0);
      document.getElementById("txt-encriptado").innerHTML = txtCifrado;
}

function desencriptar(){
          let texto = document.getElementById("input").value; 
          var txtCifrado = texto.replace(/ufat/g,"u");
          var txtCifrado = txtCifrado.replace(/ai/g,"a");
          var txtCifrado = txtCifrado.replace(/imes/g,"i");
          var txtCifrado = txtCifrado.replace(/ober/g,"o");
          var txtCifrado = txtCifrado.replace(/enter/g,"e");
     
          document.getElementById("exito").innerHTML= "Mensaje descifrado";
          imgChange(0);
          document.getElementById("txt-encriptado").innerHTML = txtCifrado;
         
 }

 function copy(){   
      let copiado = document.getElementById("txt-encriptado");
       if (copiado.value === ""){
              alert("No existen mensajes encriptados para copiar");}
   else{
          copiado.select();
          copiado.setSelectionRange(0,999999);
          navigator.clipboard.writeText(copiado.value);  
          console.log(copiado);
          document.getElementById("exito").innerHTML= "Mensaje copiado";
          imgChange(1);
          alert("Texto copiado");
   }
 }

 function paste(){
             var textPaste = navigator.clipboard.readText()
             .then((textPaste)=>(document.getElementById("input").innerHTML = promiseResult)); 
             console.log(textPaste);      
 }

