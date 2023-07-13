import ProductFactory from "./ProductFactory.js";
import Produto from "./Produto.js";

export default class Cart {
    private items_count: number = 0;
    private items: Array<Produto> = [];
    private total_value: number = 0;
    cart: HTMLDivElement =  document.getElementById('cart') as HTMLDivElement;
    backdrop = document.getElementById("modal_backdrop") as HTMLDivElement;
    view_cart_button: HTMLButtonElement = document.getElementById("view_cart") as HTMLButtonElement;
    itemCount_element: HTMLParagraphElement = document.getElementById('item_count') as HTMLParagraphElement;  
    constructor() {
        const modal = document.getElementById("modal") as HTMLDivElement;
        this.backdrop.addEventListener("click", () => {
            modal.style.display = "none";
        })
        this.view_cart_button.addEventListener("click", () => {
            modal.style.display = "flex";
            this.refreshModalState();
        })
    }

    refreshModalState() {
        const totalPriceElement = document.getElementById("total_price") as HTMLSpanElement;
        totalPriceElement.innerText = this.getTotalValue().toString();
    }
   getItems() 
   {
        return this.items;
   } 

   getItemsCount() {
    return this.items_count;
   }

   getTotalValue()
   {
    return this.total_value;
   }

   addItem(produto: Produto) {
    this.items.push(produto);
    this.refreshState();
   }

   removeItem(produto: Produto)
   {
       this.items = this.items.filter(item => {
        console.log(item)
        console.log(produto);
        return item.id !== produto.id
    });
   console.log(this.items);
   this.refreshState();

   }

   setTotalValue()
   {
    this.total_value = 0;
    this.items.forEach((item) => {
        this.total_value += item.preco;
    })
   }

   refreshState()
   {
       this.setTotalValue();
       this.refreshModalState();
        const modalContent = document.getElementById("modal_cart_content") as HTMLDivElement;
        modalContent.innerHTML = "";
        this.items.forEach((produto) => {
            modalContent.appendChild(ProductFactory.createCartProduct(produto, this));
        })
        this.items_count = this.items.length;
        this.itemCount_element.innerText = this.items_count.toString();

   }
}
