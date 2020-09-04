function adicao(){
    let n1 = Number(document.getElementById("ad1").value)
    let n2 = Number(document.getElementById("ad2").value)
    let adicao = (n1+n2)
    let res = document.getElementById("resadicao")
    if (n1 == 0|| n2 == 0){
        res.innerHTML = "Está faltando digitar um número."
     } else {
        res.innerHTML = `${n1} + ${n2} = ${adicao}` 
     }
    }

    function limparad(res){
      document.getElementById('resadicao').innerHTML = '';
   }