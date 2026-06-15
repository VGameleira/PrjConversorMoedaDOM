function converterMoeda() {
  const valorReal = parseFloat(document.getElementById("valorReal").value);
  const moedaDestino = document.getElementById("moedaDestino").value;
  const tipoCotacao = document.querySelector('input[name="tipoCotacao"]:checked').value;
  const resultado = document.getElementById("resultadoConversao");

  let cotacao;

  if (tipoCotacao === "fixa") {
    cotacao = moedaDestino === "usd" ? 5.67 : 6.40;
  } else {
    cotacao = parseFloat(document.getElementById("cotacao").value);
  }

  if (isNaN(valorReal) || isNaN(cotacao) || valorReal <= 0 || cotacao <= 0) {
    resultado.textContent = "Por favor, preencha todos os campos corretamente.";
    resultado.style.color = "red";
    return;
  }

  const valorConvertido = valorReal / cotacao;
  const simbolo = moedaDestino === "usd" ? "U$" : "€";

  resultado.textContent = `Valor convertido: ${simbolo} ${valorConvertido.toFixed(2)}`;
  resultado.style.color = "green";
}
