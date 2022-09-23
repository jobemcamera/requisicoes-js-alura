var numeroComputador = parseInt(Math.random() * 11);
var numeroChute = prompt("Bem vindo ao jogo da adivinhação. Chute um número de 0 a 10. Você tem 3 tentativas.");
var tentativas = 3;

while (tentativas !==0) {
  if (numeroChute == numeroComputador) {
    
    tentativas = 0;
    alert(`Parabéns, você acertou!!! O número ${numeroChute} era o correto.`);
   
  } else if (numeroChute < numeroComputador) {
   
    tentativas = tentativas-1;
     if (tentativas > 1) {
       alert(`Oops, você errou! O número ${numeroChute} é menor que o número correto. Você ainda tem ${tentativas} tentativas.`); 
       numeroChute = prompt("Chute um número de 0 a 10.");
     } else if (tentativas == 1) {
       alert(`Oops, você errou! O número ${numeroChute} é menor que o número correto. Você ainda tem ${tentativas} tentativa.`); 
       numeroChute = prompt("Chute um número de 0 a 10.");
     } else if (tentativas == 0) {
       alert(`Fim de jogo, você perdeu. O número correto era ${numeroComputador}.`);
     }
    
  } else if (numeroChute > numeroComputador) {
   
    tentativas = tentativas-1;
     if (tentativas > 1) {
       alert(`Oops, você errou! O número ${numeroChute} é maior que o número correto. Você ainda tem ${tentativas} tentativas.`); 
       numeroChute = prompt("Chute um número de 0 a 10.");
     } else if (tentativas == 1) {
       alert(`Oops, você errou! O número ${numeroChute} é maior que o número correto. Você ainda tem ${tentativas} tentativa.`); 
       numeroChute = prompt("Chute um número de 0 a 10.");
     } else if (tentativas == 0) {
       alert(`Fim de jogo, você perdeu. O número correto era ${numeroComputador}.`);
     }
  } 
}