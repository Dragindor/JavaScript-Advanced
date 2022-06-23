class VegetableStore 
{
    constructor(owner, location, availableProducts)
    {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables (vegetables)
    {
        const added = new Set();

        let allProducts = vegetables.map(x=>x.split(", "))

        allProducts.forEach(element => 
        {
            let splitted = element.map(x=>x.split(" "));
            let type = splitted[0][0];
            let quantity = Number(splitted[0][1]);
            let price = Number(splitted[0][2]);
            added.add(type);
            let found = this.availableProducts.find((x) => x.type === type);
            if (found != undefined) 
            {
                found.quantity += quantity
                if (found.price < price) 
                {
                    found.price = price
                }
            }
            else
            {
                this.availableProducts.push({type: type, quantity: quantity, price: price });
            }
        });
        return `Successfully added ${[...added].join(", ")}`;
    }
    buyingVegetables (selectedProducts)
    {
        let totalPrice = 0.00;

        let allProducts = selectedProducts.map(x=>x.split(", "))

        allProducts.forEach(element => 
        {
            let splitted = element.map(x=>x.split(" "));
            let type = splitted[0][0];
            let quantity = Number(splitted[0][1]);

            let found = this.availableProducts.find((x) => x.type === type);
                if (found != undefined) 
                {
                    if (found.quantity < quantity ) 
                    {
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                    }
                    else
                    {
                        totalPrice += quantity * found.price;
                        found.quantity -= quantity;
                    }
                }
                else
                {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable (type, quantity)
    {
        let found = this.availableProducts.find((x) => x.type === type);
                if (found != undefined) 
                {
                    if (found.quantity <= quantity ) 
                    {
                        found.quantity = 0;
                        return `The entire quantity of the ${type} has been removed.`;
                    }
                    else
                    {
                        found.quantity -= quantity;
                    }
                }
                else
                {
                    throw new Error(`${type} is not available in the store.`);
                }
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        const products = this.availableProducts
          .sort((a, b) => a.price - b.price)
          .map((p) => `${p.type}-${p.quantity}-$${p.price}`);
    
        return `Available vegetables:\n${products.join("\n")}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
      }   
}


//input
let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

console.log(vegStore.rottingVegetable("Okra",1));
console.log(vegStore.rottingVegetable("Okra",2.5));

console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));

