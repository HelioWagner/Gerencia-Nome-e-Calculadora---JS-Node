import "./style.scss"
const dados = require("./dados")
const processo = require("./processo")

const botao = document.querySelector("#botao_nome")
botao.addEventListener("click", executar_processo)
const botao_calculo = document.querySelector("#botao_calculo")
botao_calculo.addEventListener("click", executar_processo)


function executar_processo(e){   
   //busca campo digitado
   const identificador = e.target.id;
   //busca valor digitado   
   campos_digitados = dados.busca_campo_digitado(identificador)
  
   let primeiroCampo = campos_digitados.primeiro
   let segundpCampo  = campos_digitados.segundo 
  
   if (identificador == "botao_calculo" )
   {
     primeiroCampo       = processo.realiza_calculo(primeiroCampo,segundpCampo) 
     segundpCampo        = null 
   }
   //monta resultado final
   dados.monta_resultado(identificador,primeiroCampo,segundpCampo)

}

