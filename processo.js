function realiza_calculo (valor1, valor2) {
   
     if (isNaN(valor1)||isNaN(valor2) ) {
        alert("Deve ser informado valor numérico. Por favor verifique!!")
        return null
     }

     if (Number(valor2) == 0) {
        return null
     }
     
     totalValores  = (Number(valor1) / Number(valor2))
     
     return  totalValores
    
}   

module.exports = {realiza_calculo}