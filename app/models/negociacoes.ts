import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);

    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();
negociacoes.adiciona(new Negociacao(new Date(), 1, 1));
negociacoes.lista();
console.log('executei')