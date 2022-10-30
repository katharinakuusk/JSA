const products = [
    {id: 1, title: "Notebook", price: 2000, img: "notebook"}, 
    {id:2, title: "Mouse", price: 20, img: "mouse"},
    {id:3, title: "Keyboard", price: 200, img: "keyboard"},
    {id:4, title: "Gamepad", price: 50, img: "gamepad"},
];

console.log(...products);

// cdw()
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

const renderProduct = (properties) => {
    return `<div class="product-item">
                <h3>${properties.title}</h3>
                <img class="img" src="${dir}/img/${properties.img}">
                <div "buy-btn__wrap">
                    <p class="price">${properties.price}</p>
                    <button class="buy-btn">Buy</button>
                </div>
            </div>\n`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    //.join() allows to get rid of the coma between the array elements 
    document.querySelector('.products-container').innerHTML=productsList.join("");
}

renderPage(products);