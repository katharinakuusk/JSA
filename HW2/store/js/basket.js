export class Page {
    constructor() {
        this.dir = this.getDir()
        this.products = [
            {id: 1, title: "Notebook", price: 2000, img: "notebook"}, 
            {id:2, title: "Mouse", price: 20, img: "mouse"},
            {id:3, title: "Keyboard", price: 200, img: "keyboard"},
            {id:4, title: "Gamepad", price: 50, img: "gamepad"},
            ]
        this.getImgSrc()
        this.items =[];
    }
    
    getDir() {
        let loc = window.location.pathname;
        let dir = loc.substring(0, loc.lastIndexOf('/'));
        return dir
        
    }
    
    getImgSrc() {
        let prod = this.products.map(item => item.img = `img/${item.img}`);
        console.log(this.prod);
    }
    
    renderPage() {
        this.items = this.products.map(item => new Item(item.id, item.title, item.price, item.img));
        let productsList = this.items.map(item => item.render());
        document.querySelector('.products-container').innerHTML=productsList.join("");
    }
    
    getTotal() {
        
        let total = 0;
        let items = this.products;
        
        for (let i=0; i<items.length; i++) {
            let productTotal = items[i].price;
            total += productTotal;
        }
        
        return total
        
    }   
}

class Item {
    constructor(id, title, price, img) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
    }
    
    render() {
    return `<div class="product-item">
                <h3>${this.title}</h3>
                <img class="img" src="${this.img}">
                <div "buy-btn__wrap">
                    <p class="price">${this.price}</p>
                    <button class="buy-btn">Buy</button>
                </div>
            </div>\n`
    };
}

class Basket {
    constructor() {
        this.items = [];
        this.total = 0;
    }
    
    // GoodsList
    getTotal() {
        
        total = 0
        items = this.items
        
        for (let i=0; i<items.length; i++) {
            productTotal = items[i].price * items[i].number
            total += productTotal
        }
        
        return total
    }
    
    emptyBasket() {
        
    }
    
    addItem() {
        
    }
    
    removeItem() {
        
    }
    
    addDiscountCode() {
        
    }
    
    createOrder() {
        
    }
    
}
