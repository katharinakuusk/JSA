const API = 'https://raw.githubusercontent.com/katharinakuusk/JSA/HW3/HW2';

export class Catalogue {
    constructor() {
        this.dir = this.getDir()
        this.file_name = "catalogue_products.json"
        this.products = []
        this.getProducts(this.file_name)
            .then(data => {
                this.products = data;
                this.getImgSrc();
                this.renderPage();
            })
    }

    getProducts(file_name){
        return fetch(`${API}/${file_name}`)
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    
    getDir() {
        let loc = window.location.pathname;
        let dir = loc.substring(0, loc.lastIndexOf('/'));
        return dir
    }
    
    getImgSrc() {
        this.products.forEach(item => item.img = `${this.dir}/img/${item.img}`);
    }
    
    renderPage() {
        this.items = this.products.map(item => new Item(item.id, item.title, item.price, item.img));
        let productsList = this.items.map(item => item.render());
        document.querySelector('.products-container').innerHTML=productsList.join("");
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
                <div class="buy-btn__wrap">
                    <p class="price">${this.price}</p>
                    <button class="buy-btn">Buy</button>
                </div>
            </div>\n`
    };
}
