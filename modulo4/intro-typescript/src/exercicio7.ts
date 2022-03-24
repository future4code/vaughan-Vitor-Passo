// function fitaTranscrita(dna: string[]): string{
//     let novaFita = dna.toUpperCase()
//     novaFita.replace("A", "U")
//     return novaFita
// }

// console.log(fitaTranscrita("adasd"))


// const trocando = fitaTranscrita.replace()

let fitaTranscrita: string = "ATT GCT GCG CAT TAA CGA CGC GTA"
let eita: string
eita = fitaTranscrita.replace(/A/g, "U") //trocando todos os A, por u
let eitaa: string = eita.replace(/T/g, "A") //trocando todos os T, por A
let eit: string = eitaa.replace(/C/g, "G") //trocando todos os C, por G
console.log(eit)

