/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   console.log("Boas vindas ao jogo de BlackJack")
   if (confirm("Quer iniciar uma nova rodada")) {
      let usuario;
      let computador;
    const cartaComputador = comprarCarta();
    const cartaComputador1 = comprarCarta();
    computador = Number(cartaComputador.valor + cartaComputador1.valor)
   console.log(`Usuário ${cartaComputador.texto} ${cartaComputador1.texto} - pontuação ${computador}`)

   const cartaUsuario = comprarCarta()
   const cartaUsuario1 = comprarCarta()
   usuario = Number(cartaUsuario.valor + cartaUsuario1.valor)
   console.log(`Usuário ${cartaUsuario.texto} ${cartaUsuario1.texto} - pontuação ${usuario}`)
      
   if(usuario > computador){
      console.log("O usuário ganhou!")
   }
   else if (computador > usuario ) {
      console.log("O computador ganhou!")
      
   }
   else if (computador === usuario) {
      console.log("Empate!")
      
   }

} 



   else{
      console.log("O jogo acabou")
   }

   //  const carta = comprarCarta();
   //  console.log(carta.texto)
   //  console.log(carta.valor)