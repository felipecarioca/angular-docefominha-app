export class Produto {
    constructor(nome : string,
                preco: number){
        this.nome = nome;
        this.preco = preco;
    }
    _id? : string;
    nome : string;
    preco : number;
}
