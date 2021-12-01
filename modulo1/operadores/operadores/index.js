// exercícios de interpretação de código
    // 1-Questão
    // a --> o resultado retornará um false.
    // b --> o resultado retornará um false.
    // c --> o resultado retornára um true.
    // d --> o tipo primitivo é um booleano.

    // 2-Questão

    // Toda vez que um usuário digitar algo por meio do prompt, aquilo vai como String, logo o erro do meu amigo é que,
    // ele não está fazendo a conversão de string para o tipo number.


    //3-Questão
    // let primeiroNumero = Number(prompt("Digite um numero!"));
    // let segundoNumero = Number(prompt("Digite outro numero!"));
    // const soma = primeiroNumero + segundoNumero;
    // console.log(soma);


    //Exercício de escrita de código
    // 1-Questão
    // const idade = Number(prompt("Digite a sua idade"))
    // const idadeMelhorAmigo = Number(prompt("Digite a idade do seu melhor amigo"));
    // const comparacao = idade > idadeMelhorAmigo;
    // console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao);

    //2-Questão
    // let numeroPar = Number(prompt("Digite um número par"));
    // numeroPar = numeroPar % 2;
    // console.log("O resto da divisão é:", numeroPar);
    // **Observação** --> todos números pares tem resto 0!!!!!
    // **Observação2** --> todos números ímpares tem resto na divisão!!!

    //3-Questão
    // const idade = Number(prompt("Digite sua idade em anos"));
    // const idadeEmMeses = (idade * 12);
    // console.log("Sua idade em meses:", idadeEmMeses);
    // const idadeEmDias = (idade * 365);
    // console.log("Sua idade em dias é:", idadeEmDias);
    // const idadeEmHoras = (idade * 8760);
    // console.log("Sua idade em horas é:", idadeEmHoras);
    
    //4-Questão
    // const num1 = Number(prompt("Digite um número"));
    // const num2 = Number(prompt("Digite outro número"));
    // const comparacao = num1 > num2;
    // console.log("O primeiro numero é maior que segundo?", comparacao);
    // const comparacao1 = num1 === num2;
    // console.log("O primeiro numero é igual ao segundo?", comparacao1)
    // const comparacao2 = num1 % num2 === 0;
    // console.log("O primeiro numero é divisível pelo segundo?", comparacao2);
    // const comparacao3 = num2 % num1 === 0;
    // console.log("O segundo numero é divisível pelo primeiro?", comparacao3);

            //desafio
    //1-Questão
    //tranformação de unidades de medidas de temperatura
    //--> a)
    //  const fahrenheit = 77;
    //  const kelvin = (fahrenheit - 32) * (5/9) + 273.15;
    //  console.log(kelvin,"K");
    // //--> b)
    //  const celsius = 80;
    //  const fahrenheit = (celsius) * (9/5) + 32;
    //  console.log(fahrenheit, "°F");
        //--> c)
        // const celsius = 30;
        // const fahrenheit = (celsius) * (9/5) + 32;
        // const kelvin = celsius + 273;
        //  console.log(fahrenheit, "°F", kelvin, "K");

        // --> d)
        //  const celsius = Number(prompt("Digite quantos graus em celcius °C "));
        //  const fahrenheit = (celsius) * (9/5) + 32;
        //  const kelvin = celsius + 273;
        //  console.log(fahrenheit, "°F", kelvin, "K");
     
        //2-Questão
        //--> a)
        // const quiloWattHora = 280;
        // const valorPagar = (quiloWattHora * 0.05);
        // console.log("O valor que você vai pagar é:", valorPagar); 
        
        //--> b)
        // const quiloWattHora = 280;
        //  const valorPagar = (quiloWattHora * 0.05);
        //  const valorDesconto = valorPagar  * (15/100);
        //  const novoValor = valorPagar - valorDesconto;
        //  console.log("O valor com desconto é:", novoValor);  

        //3-Questão
        //a)
        // const massaLibra = 20;
        // const conversaoLibraQuilo = (massaLibra/ 2.2);
        // console.log("O valor em Kg aproximadamente é:", conversaoLibraQuilo);
        //b)
        //  const massaOnça = 10.5;
        //  const conversaoOncaQuilo = (massaOnça / 35.274);
        //  console.log("O valor em Kg aproximadamente é:", conversaoOncaQuilo);
            //c)
        //  const milha = 100;
        //  const conversaoMetro = (milha * 1609);
        //  console.log("O valor em metro é:", conversaoMetro, "m");
        //  const pes = 50;
        //  const conversaoMetro = (pes * 3.281);
        //  console.log("O valor em metro é:", conversaoMetro, "m");
        //d)
        // const pes = 50;
        //  const conversaoMetro = (pes * 3.281);
        //  console.log("O valor em metro é:", conversaoMetro, "m");
        //e)
            // const galao = 103.56;
            // const conversaoLitro = (galao * 3.785);
            // console.log("O valor em litro aproximadamente é:", conversaoLitro, "L");
        //f)
        // const xicara = 450;
        //  const conversaoLitro = (xicara * 6)/25;
        //  console.log("O valor em litro é:", conversaoLitro, "L");
        //last
        // const xicara = Number(prompt("Digite o valor em xícaras"));
        // const conversaoLitro = (xicara * 6)/25;
        // console.log("O valor em litro é:", conversaoLitro, "L");

