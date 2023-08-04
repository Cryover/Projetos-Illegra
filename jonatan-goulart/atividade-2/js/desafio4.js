/*
Inverta o valor das variáveis em uma linha de código:

let fruta1 = "banana";
let fruta2 = "maçã";
*/

let fruta1 = "banana";
let fruta2 = "maçã";

[fruta1, fruta2] = [fruta2, fruta1];

console.log("Fruta 1: " + fruta1 + " | Fruta 2: " + fruta2);