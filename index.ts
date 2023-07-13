import Cart from "./classes/Cart.js";
import ProductFactory from "./classes/ProductFactory.js";
import Produto from "./classes/Produto.js";


const form = {
    nome: document.getElementById("nome") as HTMLInputElement,
    valor: document.getElementById("valor") as HTMLInputElement,
    botao: document.getElementById("add_new_product") as HTMLButtonElement
}

const shopContent = document.getElementById("shop_content") as HTMLDialogElement;
const cart = new Cart();

const maquinaDeBarbear = new Produto("Maquina de barbear", "Maquina boa demais", 100, ["fa-solid", "fa-check"]);
const ps2 = new Produto("PS2", "Melhor videogame", 1000, ["fa-solid", "fa-check"]);
const vassoura = new Produto("Vassoura", "Varre demais essa!", 32, ["fa-solid"]);
const esfregao = new Produto("Esfregao", "Esse limpa mesmo", 21, ["fa-solid"]);

const arrProdutos = [maquinaDeBarbear,ps2, vassoura, esfregao];


function refreshHtml() {
    shopContent.innerHTML = "";
    arrProdutos.forEach((produto) => {
        shopContent.appendChild(ProductFactory.createProduct(produto,cart));

});    
}

refreshHtml();

form.botao.addEventListener("click", () => {
    arrProdutos.push(new Produto(form.nome.value, "", +form.valor.value, ["fa-solid"]));
    refreshHtml();
})




