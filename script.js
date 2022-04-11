let aleatorio = Math.floor (Math.random()*15)+1;
let numintentos =0;
acierto = false; 



while(acierto==false){
   let entrada = prompt("ingresa un numero del 1 al 15");
   numintentos++;
  
   if (entrada<16){
       if (entrada==aleatorio) {
               alert("bien, acertaste, has utilizado " + numintentos + " intentos.");
               acierto=true;
               console.log("el numero es " + aleatorio);
               }

               else

                  {
                     alert("No es el numero corecto. Lo has intentado " + numintentos + " veces.");
                  }                  


}  
   else 
      {
         alert ("Error, el numero es mayor a 15");
      }

   }
   

         

