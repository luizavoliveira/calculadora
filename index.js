document.getElementById('resp').onclick = function(){

    var a = parseFloat(document.getElementById('num1').value);
    var b = parseFloat(document.getElementById('num2').value);
    var c = document.getElementById('botao').value;
    
    let resposta;

    if(c == '+'){
        resposta = a + b;
    }
    else if(c == '-'){
        resposta = a - b;
    }
    else if(c == '*'){
        resposta = a * b;
    }
    else if (c == '/'){
        resposta = a / b;
    }

    document.getElementById('result').innerText = resposta;
}

