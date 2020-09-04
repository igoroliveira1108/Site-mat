function subtracao(){
    let n1 = (document.getElementById("sub1").value)
    let n2 = (document.getElementById("sub2").value)
    let sub = n1-n2
    let res = document.getElementById("ressubtracao")
    if (n1 == 0|| n2 == 0){
        res.innerHTML = "Está faltando digitar um número."
     } else {
        res.innerHTML = `${n1} - ${n2} = ${sub}` 
     }
    }

function limparsub(res){
   document.getElementById('ressubtracao').innerHTML = '';
   }