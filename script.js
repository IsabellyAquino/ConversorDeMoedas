function converterMoeda() {
    var nome = document.getElementById("nome").value;
    var valor = parseFloat(document.getElementById("valor").value);
  
    var cotacaoDoDolar = 4.87;
    var valorEmReal = valor * cotacaoDoDolar;
  
    valorEmReal = valorEmReal.toFixed(2);
  
  alert(nome + ", o valor em reais é: R$ " + valorEmReal);
  }
  