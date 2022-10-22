function busca_campo_digitado(identificador) { 
    
     if (identificador == "botao_nome"){
        valor1 = document.querySelector("#entrada_nome").value
        valor2 = document.querySelector("#entrada_sobrenome").value       
       
     } else {
        valor1 = document.querySelector("#entrada_primeiro").value
        valor2 = document.querySelector("#entrada_segundo").value       
     }
 
     campos_digitados = {
        primeiro : valor1,
        segundo  : valor2
     }
     return campos_digitados;

  }

  function monta_resultado(identificador,valor1, valor2){

    if (identificador == "botao_nome"){
        resultado_nome = document.querySelector("#resultado_nome")
        resultado_nome.innerHTML = valor1+" "+ valor2
        resultado_nome.style.fontSize = "20px";        
    }    
    else {
        resultado_nome = document.querySelector("#resultado_dividir")   
        resultado_nome.innerHTML = valor1 
    }

  }





  module.exports = {busca_campo_digitado,monta_resultado}