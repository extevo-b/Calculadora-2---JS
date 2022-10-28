function calcular(oper){
    var valor1 = document.formulario.valor1.value;
    var valor2 = document.formulario.valor2.value;

    if(document.getElementById('somar').checked){
        res = somar(valor1, valor2);
    }
    else if(document.getElementById('subtrair').checked){
        res = subtrair(valor1, valor2);
    }
    else if(document.getElementById('multiplicar').checked){
        res = multiplicar(valor1, valor2);
    }
    else if(document.getElementById('dividir').checked){
        res = dividir(valor1, valor2);
    }

    function somar(a,b){
        var result = parseInt(valor1) + parseInt(valor2);
        return result;
    }
    function subtrair(a,b){
        var result = parseInt(valor1) - parseInt(valor2);
        return result;
    }
    function multiplicar(a,b){
        var result = parseInt(valor1) * parseInt(valor2);
        return result;
    }
    function dividir(a,b){
        var result = parseInt(valor1) / parseInt(valor2);
        return result;
    }

    document.formulario.res.value = res;
}