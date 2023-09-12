let botao = document.getElementsById('calcular')[0];
botao.onclick = function(e){
    let num1 =  Number(document.getElementById('num1').value);
    let num2 =  Number(document.getElementById('num2').value);
    let operacao = document.getElementById('operacao').value;
    if (operacao === 'Soma'){
        alert(num1 + num2);
    } else if(operacao === 'Subtração'){
        alert(num1 - num2);
    } else if( operacao === 'Divisão'){
        alert(num1 / num2);
    } else if (operacao === 'Multiplicação') {
        alert(num1 * num2);
    } else {
        alert('operação inválida');
    }
    
    e.preventDefault();
    document.getElementById('resultado').style.display = 'block';
}



