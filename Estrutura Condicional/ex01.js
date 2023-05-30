// O programa deverá pedir por um valor em metros e então dar  a opção de escolher para qual unidade de medida esse valor deve ser convertido

let veiculo1 = prompt('Nome 1 carro:')
let velocidade1 = parseFloat(prompt('Qual a velocidade do 1º carro:'))
let veiculo2 = prompt('Nome do 2 carro:')
let velocidade2 = parseFloat(prompt('Qual a velocidade do 2º carro:'))

if(velocidade1 > velocidade2) {
    alert(`O ${veiculo1} é mais rapido que o ${veiculo2}`)
}else if(velocidade1 < velocidade2) {
    alert(`O ${veiculo2} é mais rapido que o ${veiculo1}`)
}else {
    alert(`A velocidade do ${veiculo1} e do ${veiculo2} são iguais`)
}

