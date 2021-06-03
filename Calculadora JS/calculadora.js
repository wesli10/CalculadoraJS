var valor;

function botao(num) {
    valor = document.calc.visor.value += num;
}
function reset() {
    document.calc.visor;
}
function result() {
    resultado = eval(valor)
    document.calc.visorResult.value = resultado.toLocaleString("pt-BR");
    
}