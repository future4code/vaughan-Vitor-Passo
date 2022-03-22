const op = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
let result = 0;
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
