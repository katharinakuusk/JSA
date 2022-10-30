class Hamburger {
    
    constructor(size) {
        this.priceList = {
            large: 100,
            small: 50,
            salad: 20, 
            cheese: 10, 
            potato: 15,
            mayo: 20, 
            spices: 15
        };
        this.energyDict = {
            large: 40,
            small: 20,
            salad: 5, 
            cheese: 20, 
            potato: 10,
            mayo: 5, 
            spices: 0
        }; 
        this.stuffs = [];
    }
    
    setSize(size) {
        
        if (!this.hasOwnProperty("price")) {
            this.price = this.priceList[ size ];
        }
        
        if (!this.hasOwnProperty("energy")) {
            this.energy = this.energyDict[ size ];
        }
        
        this.showPrice()
        this.showEnergy()
    }
    
    addStuff(stuff) {
        this.stuffs.push(stuff)
        this.getPrice(stuff);
        this.getEnergy(stuff);
        this.showPrice()
        this.showEnergy()
    }
    
    getPrice(addition) {
        this.price += this.priceList[ addition ];
    }
    
    getEnergy(addition) {
        this.energy += this.energyDict[ addition ];
    }
    
    showPrice() {
        document.getElementById('price').innerHTML = this.price;
    }
    
    showEnergy() {
        document.getElementById('energy').innerHTML = this.energy;
    }
    
}

hamburger = new Hamburger()