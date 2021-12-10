            //Exercicios de interpretação de código
    
    //1-Questão
        //A) No console vai mostrar todo o conteudo do array, o indíce e todo o array
        // irá mostra o conteudo do array na primeira posicao e todo o array respectivamente até
        // a ultimo indice do array que no caso é: 2.


    //2-Questão
        //A) No console vai mostra todos os nomes dentro do array. Isso acontece porque 
        // ele usou o "item.nome" por meio do map.



    //3-Questão
        //A) Irá mostra tudo que não tem chijo no Chijo

            //Exercicios de interpretação de código


    //1-Questão
    // const pets = [
    //     {nome: "Lupin", raca: "Salsicha"},
    //     {nome: "Polly", raca: "Lhasa Apso"},
    //     {nome: "Madame", raca: "Poodle"},
    //     {nome: "Quentinho", raca: "Salsicha"},
    //     {nome: "Fluffy", raca: "Poodle"},
    //     {nome: "Caramelo", raca: "Vira-lata"},
    // ]
        //A)      
        // const mostrandoNomes = pets.map((item, indice, array) =>{
        //     return item.nome;
        // });
        // console.log(escolhendoRaca);


        //B)
        // const escolhendoRaca = pets.filter((item, indice, array) =>{
        //     return item.raca === "Salsicha";
        // })
        // console.log(escolhendoRaca);
            

        // C)
        // let novoArray = []
        // const descontoPoodle = pets.filter((item) =>{
        //     if (item.raca === "Poodle") {
        //         mensagem = `Voce ganhou 10% de desconto ${item.nome}`
        //         novoArray.push(mensagem)
        //     }
        // })
    
        // console.log(novoArray)
        
       
        

    
    //2-Questão
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
    //a)
    // const nomesProdutos = produtos.map((item) => {
    //     return item.nome

    // })
    // console.log(nomesProdutos)


    //b)
    // const descontoProduto = produtos.map((item) =>{
    //     let desconto = item.preco * 0.05;
    //     let novoPreco = item.preco - desconto;
    //     console.log(novoPreco)
    //     const novoObjeto ={
    //         nome: item.nome,
    //         preco: novoPreco.toFixed(2)
    //     }
    //     return novoObjeto
       
    // })  
    // console.log(descontoProduto)



    //c)
    // const bebidas = produtos.filter((item) =>{
    //     return item.categoria === "Bebidas"
        
    // })
    // console.log(bebidas)
    


    //d)
    // const palavraYpe = produtos.filter((item)=>{
    //     if (item.categoria === "Limpeza" && item.nome.includes("Ypê")) {
    //         return true
    //     }
    // })
    // console.log(palavraYpe)
    

    //e) 
    const produtoYpe2 = produtos.filter((produto) =>{
        return produto.nome.includes("Ypê")
    })
    const mensagem = produtoYpe2.map(produto => `Compre ${produto.nome} por ${produto.preco}`)
    console.log(mensagem) 
