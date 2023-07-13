import ProductFactory from "./ProductFactory.js";
export default class Cart {
    items_count = 0;
    items = [];
    total_value = 0;
    cart = document.getElementById('cart');
    backdrop = document.getElementById("modal_backdrop");
    view_cart_button = document.getElementById("view_cart");
    itemCount_element = document.getElementById('item_count');
    constructor() {
        const modal = document.getElementById("modal");
        this.backdrop.addEventListener("click", () => {
            modal.style.display = "none";
        });
        this.view_cart_button.addEventListener("click", () => {
            modal.style.display = "flex";
            this.refreshModalState();
        });
    }
    refreshModalState() {
        const totalPriceElement = document.getElementById("total_price");
        totalPriceElement.innerText = this.getTotalValue().toString();
    }
    getItems() {
        return this.items;
    }
    getItemsCount() {
        return this.items_count;
    }
    getTotalValue() {
        return this.total_value;
    }
    addItem(produto) {
        this.items.push(produto);
        this.refreshState();
    }
    removeItem(produto) {
        this.items = this.items.filter(item => {
            console.log(item);
            console.log(produto);
            return item.id !== produto.id;
        });
        console.log(this.items);
        this.refreshState();
    }
    setTotalValue() {
        this.total_value = 0;
        this.items.forEach((item) => {
            this.total_value += item.preco;
        });
    }
    refreshState() {
        this.setTotalValue();
        this.refreshModalState();
        const modalContent = document.getElementById("modal_cart_content");
        modalContent.innerHTML = "";
        this.items.forEach((produto) => {
            modalContent.appendChild(ProductFactory.createCartProduct(produto, this));
        });
        this.items_count = this.items.length;
        this.itemCount_element.innerText = this.items_count.toString();
    }
}
