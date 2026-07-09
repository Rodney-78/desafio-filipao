/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/
let nomeDoHeroi = "SuperDevMan"
let XP =6750
let experiencia = " "

if (XP <= 1000) {
    experiencia = "Ferro"
 } else if (XP >= 1001 && XP <= 2000) {
     experiencia = "Bronze"
 } else if (XP >= 2001 && XP <= 5000) {
     experiencia = "Prata"
 } else if (XP >= 5001 && XP <= 7000) {
     experiencia = "Ouro"
 } else if (XP >= 7001 && XP <= 8000) {
     experiencia = "Platina"
 } else if (XP >= 8001 && XP <= 9000) {
     experiencia = "Ascendente"
 } else if (XP >= 9001 && XP <= 10000) {
     experiencia = "Imortal"
 } else {
     experiencia = "Radiante"
 }

// switch (true) {
//     case XP <= 1000: experiencia = "Ferro"; break;
//     case XP >= 1001 && XP <= 2000: experiencia = "Bronze"; break;
//     case XP >= 2001 && XP <= 5000: experiencia = "Prata"; break;
//     case XP >= 5001 && XP <= 7000: experiencia =  "Ouro"; break;
//     case XP >= 7001 && XP <= 8000: experiencia = "Platina";break;
//     case XP >= 8001 && XP <= 9000: experiencia = "Ascendente"; break;
//     case XP >= 9001 && XP <= 10000: experiencia = "Imortal"; break;
//     default: experiencia = "Radiante";
// }

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${experiencia}`)


