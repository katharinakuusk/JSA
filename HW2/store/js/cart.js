import {Catalogue} from './catalogue.js';

const API = 'https://raw.githubusercontent.com/katharinakuusk/JSA/HW3/HW2';

export class Cart extends Catalogue {
    constructor() {
        super();
        this.file_name = "basket_items.json"
        this.products = [];
        this.getProducts(this.file_name)
            .then(data => {
                this.products = data["contents"];
                this.getImgSrc();
                this.total = this.getTotal();
                this.renderCart()
                console.log(this.total);
            })
    }

    onPressCart() {
        let el = document.getElementById('cart');
        if (el.classList.contains("cart")) {
            Cart.hideCart();
        } else {
            Cart.showCart();
        }
    }

    static showCart() {
        document.querySelector('#cart').className = "cart";
    }

    static hideCart() {
        document.querySelector('#cart').className = "cart-hidden";
    }

    renderCart() {
        this.items = this.products.map(item => new CartItem(item.id, item.title, item.price, item.quantity));
        let productsList = this.items.map(item => item.render());
        document.querySelector('#btn-cart').addEventListener("click", this.onPressCart);
        document.querySelector('#cart').innerHTML=productsList.join("");
    }

    getTotal() {

        let total = 0;
        let items = this.products;

        for (let i=0; i<items.length; i++) {
            let productTotal = items[i].price * items[i].quantity;
            total += productTotal;
        }

        return total
    }

    emptyBasket() {

    }

    addItem() {

    }

    static removeItem() {
        console.log(this);
    }

    addDiscountCode() {

    }

    createOrder() {

    }

}

class CartItem {
    constructor(id, title, price, quantity) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    render() {
        return `<div class="cart-item">
                <div class="cart-item-title__wrap">
                    <h6 class="cart-item__title">${this.title}</h6>
                    <p class="cart-item__quantity">x${this.quantity}</p>
                </div>
                <div class="cart-item__price-wrap">
                    <p class="cart-item__price">${this.price}</p>
                    <button class="cart-item__del-btn" id="btn-${this.id}">X</button>
                </div>
            </div>\n`
    };
}