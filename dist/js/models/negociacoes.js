import { Negociacao } from "./negociacao.js";
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.adiciona(new Negociacao(new Date(), 1, 1));
negociacoes.lista();
console.log('executei');
