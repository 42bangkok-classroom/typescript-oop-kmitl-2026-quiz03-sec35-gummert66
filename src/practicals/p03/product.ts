export class Product {
    readonly name: string;
    protected price: number;
    static readonly DISCOUNT_PERCENT: number = 10;
    
    constructor(name: string, price: number = 0) {
        this.name = name;
        this.price = price;
    }


getPrice(): number {
    return this.price;
}

setPrice(price: number): void {
    this.price = price;
}
}


