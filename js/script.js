function contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var resultado = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!');
        resultado.innerHTML = "Impossível contar!"
    } else {
        resultado.innerHTML = "Contando <br>";
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if(p <= 0){
            window.alert('Passo inválido! considerando PASSO 1');
            p = 1;
        }

        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}