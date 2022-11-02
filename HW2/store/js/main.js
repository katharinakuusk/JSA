import {Catalogue} from './catalogue.js';
import {Cart} from './cart.js';

const page = new Catalogue();
const cart = new Cart();
cart.onPressCart()
console.log(cart)
console.log(page);
