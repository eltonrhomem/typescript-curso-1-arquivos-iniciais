import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-views.js";


const controller = new NegociacaoController();
const form = document.querySelector('.form');
if(form) {
    form.addEventListener('submit',   (event: Event) => {
        event.preventDefault();
        controller.adiciona();
    });

}
else {
    console.log('Não foi possível inicializar a aplicação. Verifique se o form')
}


const negociacoesView = new NegociacoesView('#negociacoesView');
// const template = negociacoesView.template();
// console.log(template);