import {Catalogue} from './catalogue.js';

console.log("executed?")
const page = new Catalogue()
page.renderPage()
alert(page.getTotal())
