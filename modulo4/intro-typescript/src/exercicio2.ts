//2)
 const imprimeTresCoresFavoritas = ():string[] =>{
    let cor1: string = process.argv[2]
    let cor2: string = process.argv[3]
    let cor3: string = process.argv[4]
    return [cor1, cor2, cor3]
}
console.log(imprimeTresCoresFavoritas())