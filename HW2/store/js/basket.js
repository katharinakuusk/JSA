Basket {
    constructor() {
        self.items = [];
        self.total = 0;
    }
    
    // GoodsList
    getTotal() {
        
        total = 0
        items = self.items
        
        for (let=0; i<items.length; i++) {
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

Item {
    constructor() {
        self.name = "item";
        self.price = 20;
        self.img = "src";
        self.discription = "some description";
        self.number = 2;
    }
}