import Produto from "./Produto.js";
export default class ProductFactory {
    constructor() { }
    static createCartProduct(produto, cart) {
        const div = document.createElement("div");
        div.classList.add("produto_container");
        const divIcon = document.createElement("div");
        divIcon.classList.add("icon_container");
        const icon = document.createElement("i");
        icon.classList.add(...produto.icone);
        const hr = document.createElement("hr");
        const h1 = document.createElement("h1");
        h1.classList.add("produto_title");
        h1.innerText = produto.nome;
        const p = document.createElement("p");
        p.classList.add("produto_price");
        p.innerText = produto.preco.toString();
        const btn = document.createElement("button");
        btn.classList.add("buy_btn");
        btn.innerText = "Remover do carrinho";
        btn.addEventListener("click", () => {
            cart.removeItem(produto);
            console.log(cart);
        });
        div.appendChild(divIcon);
        divIcon.appendChild(icon);
        div.appendChild(hr);
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(btn);
        return div;
    }
    static createProduct(produto, cart) {
        const div = document.createElement("div");
        div.classList.add("produto_container");
        const divIcon = document.createElement("div");
        divIcon.classList.add("icon_container");
        const icon = document.createElement("i");
        icon.classList.add(...produto.icone);
        const hr = document.createElement("hr");
        const h1 = document.createElement("h1");
        h1.classList.add("produto_title");
        h1.innerText = produto.nome;
        const p = document.createElement("p");
        p.classList.add("produto_price");
        p.innerText = produto.preco.toString();
        const btn = document.createElement("button");
        btn.classList.add("buy_btn");
        btn.innerText = "Adicionar ao carrinho";
        btn.addEventListener("click", () => {
            cart.addItem(new Produto(produto.nome, produto.descricao, produto.preco, produto.icone));
            console.log(cart);
        });
        //APPENDS
        div.appendChild(divIcon);
        divIcon.appendChild(icon);
        div.appendChild(hr);
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(btn);
        return div;
    }
}
