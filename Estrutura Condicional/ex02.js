const nome = prompt('Qual o nome do personagem?')
const ataque = parseFloat(prompt(`Qual o poder de ataque de ${nome}?`))

const nome2 =  prompt('Qual o nome do outro personagem?')
let vida = parseFloat(prompt(`Quanto de vida tem ${nome2}?`))
const defesa = parseFloat(prompt(`Quanto de defesa tem ${nome2}?`))
let pergunta = prompt(`${nome2} possui escudo?[Sim/Não]`)

let dano = 0


if(ataque > defesa && pergunta === 'não') {
     dano = ataque - defesa
} else if(ataque > defesa && pergunta === 'sim') {
    dano = (ataque - defesa) / 2
}

vida-= dano


alert(`${nome} causou ${dano} de pontos de dano em ${nome2}`)
alert(
    
    nome + "\nPoder de ataque: " + ataque + "\n\n" +
    nome2 + "\nPontos de vida: " + vida +
    "\nPoder de defesa: " + defesa + "\nPossui escudo: " + pergunta
  
)