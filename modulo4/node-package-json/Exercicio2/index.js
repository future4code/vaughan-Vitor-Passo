const op = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
let result = 0;
const calc = () => {
    switch (op) {
        case "add":
            result = num1 + num2;
            console.log("Resposta: ", result);
            break;
        case "mult":
            result = num1 * num2;
            console.log("Resposta: ", result);
            break;
        case "div":
            result = num1 / num2;
            console.log("Resposta: ", result);
            break;
        case "sub":
            result = num1 - num2;
            console.log("Resposta: ", result);
            break;
        default:
            console.log("Digite um operação válida");
            break;
    }
}

if (op && num1 && num2) {

    calc()
}
else if (!op) {
    console.log("Esperava 3 parâmetros e não recebi nenhum.")
}
else if (op) {
    console.log("Esperava 3 parâmetros e só recebi 1.")
}

else {
    console.log("Esperava 3 parâmetros só recebi 2.")
}

