const medidaMetros = parseFloat(prompt('Digite um valor em metros:'));

const escolhaUnidade = prompt(
    'para qual unidade você quer converter?' +
     '\n1. milimetro(mm)'+
     '\n2. centimetro(cm)'+
     '\n3. decimetro(dm)'+
     '\n4. decâmetro(dam)'+
     '\n5. hectômetro(hm)'+
     '\n6. quilômetro(km)'
     );

switch(escolhaUnidade) {
    case '1':
        alert('Resultado: ' + medidaMetros + 'm = ' + medidaMetros*1000 + 'mm');
        break;
    case '2':
        alert('Resultado: ' + medidaMetros + 'm = ' + medidaMetros * 100 + 'cm');
        break;
    case '3':
        alert('Resultado: ' + medidaMetros + 'm = ' + medidaMetros * 10 + 'dm');
        break;
    case '4':
        alert('Resultado: ' + medidaMetros + 'm = ' + medidaMetros / 10 + 'dam');
        break;
    case '5':
        alert('Resultado: ' + medidaMetros + 'm = ' + medidaMetros / 100 + 'hm');
        break;
    case '6':
        alert('Resultado: ' + medidaMetros + 'm = ' + medidaMetros / 1000 + 'km')
        break;
    default:
        alert('Opção invalida')
}