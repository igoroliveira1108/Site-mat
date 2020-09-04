function tabuada(){
   let n1 = (document.getElementById("fator1").value)
   let n2 = (document.getElementById("fator2").value)
   let mult = n1*n2
   let res = document.getElementById("restabuada")
   
   if (n1 == 0|| n2 == 0){
        restabuada.innerHTML = "Está faltando digitar um número."
   } else {
        restabuada.innerHTML += `${n1} x ${n2} = ${mult}` 
     }
    }

function limparmult(res){
   document.getElementById('restabuada').innerHTML = '';
}



