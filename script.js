
var expressao = "0";
var visor = document.getElementById("visor");

function mostrar(e) {
    if (expressao == 0) {
        expressao = e.target.innerText;
    } else {
        expressao = expressao + e.target.innerText;
    }
    atualizavalor();    
}

function limpar(e) {
    expressao = "0";
    atualizavalor();
}

function atualizavalor(){
    visor.innerText = expressao;
}

function calcular(e){
    res = eval(expressao)
    expressao = res
    atualizavalor()
}
