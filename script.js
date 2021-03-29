let tentativas = 3;
document.querySelector(
  "#tentativas"
).innerText = `Tentativas restantes: ${tentativas}`;

let numeroSecreto = Math.round(Math.random() * (10 - 1) + 1);

function button() {
  const input = document.querySelector("input");

            if (tentativas < 1) {
        alert('Suas tentativas acabaram!')
                    setTimeout(function() {
          window.location.reload(true)
      }, 1)
      } else {
  
  if (
    parseInt(input.value) > 10 ||
    parseInt(input.value) <= 0 ||
    input.value == ""
  ) {
    alert("Valor inválido! Digite novamente.");
  } else {
    if (parseInt(input.value) == numeroSecreto) {
      document.querySelector("p").innerText = "Resposta certa, parabéns! :D";

      tentativas = 3;

      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
     
      document.querySelector("p").classList.add("acertou");
      
      setTimeout(function() {
          window.location.reload(true)
      }, 1500)
    } else if (parseInt(input.value) < numeroSecreto) {
      document.querySelector("p").innerText = "O número secreto é maior!";

      tentativas -= 1;
      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
      document.querySelector("p").classList.add("errou");
    } else if (parseInt(input.value) > numeroSecreto) {
      document.querySelector("p").innerText = "O número secreto é menor!";

      tentativas -= 1;
      document.querySelector(
        "#tentativas"
      ).innerText = `Tentativas restantes: ${tentativas}`;
      document.querySelector("p").classList.add("errou");
    }
  }
      }
}
