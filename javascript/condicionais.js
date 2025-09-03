let numero = 7;

if (numero > 10) {
    console.log("O número é maior que 10");
} else {
    console.log("O número é 10 ou menor");
}

let idade = 20 ;

if (idade < 13) {
    console.log("Você é um criança.");
}else if (idade >= 13 && idade < 20) {
    console.log("Você é adolescente");
}else if (idade >= 20 && idade < 60){
    console.log("Você é um adulto")
} else {
    console.log("Você é um idoso")
}

const status = numero >= 18 ? "O número é maior que 10 " : " O número é 10 ou menor";
console.log(status);