//import {Cart, CartItem} from "./cart.js"
const API = 'https://raw.githubusercontent.com/katharinakuusk/JSA/HW3/HW2/';


/*@cart - object cart; needed for addition and deletion of the catalogue items in the cart
}*/

/*
@param json_name - json file name located in the API
@param container - div where the items are displayed
@param rule_list - dict containen rule of the classes' relation
*/

class List{
    constructor(jsonName, container, list=ruleList) {
        this.rule = ruleList;
        this.dir = this._getDir();
        this.container = container;
        this.file_path = `${API+jsonName}`;
        this.products = [];
        this.productObjs = [];
        this._init()
        console.log(this.products)
    }

    getJSON(file_name){
        return fetch(file_name ? file_name: `${API}/${this.file_path}`)
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    _getDir() {
        let loc = window.location.pathname;
        let dir = loc.substring(0, loc.lastIndexOf('/'));
        return dir
    }

    handleData(data) {
        this.products = data;
        this._getImgSrc();
        this.render();
    }

    _getImgSrc() {
        this.products.forEach(item => item.img = `${this.dir}/img/${item.img}`);
    }

    render() {
        const block = document.querySelector(this.container);
        /*for (let product of this.products) {
            const productObj = new this.list[this.constructor.name](product);
            this.productObjs.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render();
        }*/
        const childClass = this.rule[this.constructor.name];
        this.products = this.products.map(item => new childClass(item));
        let productsList = this.products.map(item => item.render());
        block.innerHTML=productsList.join("");
    }
}

export class Catalogue extends List {
    //if we inherit from a class with a constructor, then the child class also should have a constructor
    // super() is needed in order to inherit the properties and methods of the parent class
    constructor(cart, jsonName="catalogue_products.json", container=".products-container") {
        super(jsonName, container)
        this.cart = cart;
        this.file_name = `${API+jsonName}`;
        this.getJSON(this.file_name)
            .then(data => {
                this.handleData(data)
            })
    }
    
    _init() {
        document.querySelector(this.container).addEventListener("click", e => {
            if(e.target.classList.contains("buy-btn")) {
                this.cart.addItem(e.target)
            }
        });
    }
}

class Item {
    constructor(el) {
        this.id = el.id;
        this.title = el.title;
        this.price = el.price;
        this.img = el.img;
    }
    
    render() {
    return `<div class="product-item">
                <h3>${this.title}</h3>
                <img class="img" src="${this.img}">
                <div class="buy-btn__wrap">
                    <p class="price">${this.price}</p>
                    <button class="buy-btn" data-id=${this.id} data-price=${this.price} data-title="$this.title">Buy</button>
                </div>
            </div>\n`
    };
}

export class Cart extends List {
    constructor(jsonName="basket_items.json", container="#cart") {
        super(jsonName, container);
        this.file_path = `${API+jsonName}`;
        this.getJSON(this.file_path)
            .then(data => {
                console.log(data)
                this.handleData(data["contents"]);
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

    _init(){
        document.querySelector('#btn-cart').addEventListener("click", this.onPressCart);
        document.querySelector(this.container).addEventListener("click", e => {
            if(e.target.classList.contains("cart-item__del-btn")){
                this.removeItem(e.target);
            }
        })
    }

    addItem(btn) {
        let productId = +btn.dataset["id"];
        let find = this.products.find(product => product.id === productId);
        if(find){
            find.quantity++;
            this._updateCart(find);
        } else {
            let product = {
                id: productId,
                price: +btn.dataset["price"],
                title: btn.dataset["title"],
                quantity: 1
            }
            this.products.push(product);
            this.render();
        }
    }

    removeItem(btn) {
        let productId = +btn.dataset["id"];
        let find = this.products.find(product => product.id === productId);
        if(find.quantity > 1) {
            find.quantity--;
            this._updateCart(find);
        } else {
            this.products.splice(this.products.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
        }
    }

    _updateCart(product) {
        let block = document.querySelector(`.cart-item[data-id="${product.id}"`);
        block.querySelector(".cart-item__quantity").textContent = `${product.quantity}`;
        block.querySelector(".cart-item__price").textContent = `${product.quantity*product.price}`;
    }

}

class CartItem extends Item {
    constructor(el) {
        super(el)
        this.quantity = el.quantity;
    }

    render() {
        return `<div class="cart-item" data-id='${this.id}']">
                <div class="cart-item-title__wrap">
                    <h6 class="cart-item__title">${this.title}</h6>
                    <p class="cart-item__quantity">x${this.quantity}</p>
                </div>
                <div class="cart-item__price-wrap">
                    <p class="cart-item__price">${this.price}$</p>
                    <button class="cart-item__del-btn" data-id="${this.id}" 
                    data-title="${this.title}" data-price="${this.price}">X</button>
                </div>
            </div>\n`
    };
}

// the list bears the connection between the classes of the project
const ruleList = {
    Cart: CartItem,
    Catalogue: Item
}
