import Util from "./Util.js";
export default class Produto {
    id;
    nome;
    descricao;
    preco;
    icone;
    constructor(nome, descricao, preco, icone) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.icone = icone;
        this.id = `${Util.generateId(nome)}`;
    }
}
