import {Catalogue, Cart} from './catalogue.js';
//import {Cart, CartItem} from './cart.js';

const cart = new Cart();
const page = new Catalogue(cart);
cart.onPressCart();
console.log(cart);
console.log(page);
