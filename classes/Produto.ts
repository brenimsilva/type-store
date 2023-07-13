import Util from "./Util.js";

export default class Produto {
    id: string;
    nome: string;
    descricao: string;
    preco: number;
    icone: Array<string>;
    constructor(nome: string, descricao: string, preco: number, icone: Array<string>){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.icone = icone;
        this.id = `${Util.generateId(nome)}`
    }
}