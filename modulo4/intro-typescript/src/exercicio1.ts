//1)
const checarTriangulo = (a: number, b:number, c:number) :string=> {
    if(a !== b && b !== c){
        return "Escaleno"
    }
    else if(a === b && b === c){
        return "Equilátero"
    }
    else {
        return "Isósceles"
    }
    
}

console.log(checarTriangulo(3, 3, 3 ))



