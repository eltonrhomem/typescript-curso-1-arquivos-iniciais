import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao(new Date(), 100, 1000);
console.log(negociacao);
negociacao.data = 10;
