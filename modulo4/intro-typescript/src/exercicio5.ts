function checaRenovacao(anoAtual: number, anoNascimento: number,anoEmissao: number): string{
    let idade = anoAtual - anoNascimento;
    let tempoCarreira = anoAtual - anoEmissao;

    if(idade <= 20){
        return tempoCarreira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou dos 5 anos"
    }
    else if(idade >= 20 || idade <= 50 ){
        return tempoCarreira >= 10 ? "Passou dos 10 anos precisa renovar" : "ainda não passou dos 10 anos"
    }
    else if(idade > 50){
        return tempoCarreira >=15 ? "Passou dos 15 anos precisa renovar" : "ainda nao passou dos 15 anos"
    }
    else{
        return "error"
    }
    
}

console.log(checaRenovacao(2022, 2003, 2017))