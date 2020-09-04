function divisao(){
    let n1 = (document.getElementById("div1").value)
    let n2 = (document.getElementById("div2").value)
    let div = ((n1/n2).toFixed(2)) 
    let res = document.getElementById("resdivisao")
    if (n1 == 0|| n2 == 0){
        res.innerHTML = "Está faltando digitar um número."
     } else {
        res.innerHTML = `${n1} / ${n2} = ${div}` 
     }
    }

    function limpardiv(res){
      document.getElementById('resdivisao').innerHTML = '';
   }