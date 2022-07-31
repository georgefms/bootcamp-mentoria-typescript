// Desafio 3: 
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0

limparSaldo();

function somarAoSaldo(soma: number) {
  if(campoSaldo){
    saldo+= soma
    campoSaldo.innerHTML = saldo.toString();
  }
}

function limparSaldo() {
  if(campoSaldo){
    saldo = 0;
    campoSaldo.innerHTML = saldo.toString();
  }
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
