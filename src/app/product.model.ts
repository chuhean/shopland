export class Product {
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    merchant: string;
    id: string;

    constructor(obj?: any) {
        this.title = obj.title;
        this.image = obj.image;
        this.description = obj.description;
        this.price = obj.price;
        this.rating = obj.rating;
        this.merchant = obj.merchant;
        this.id = obj.id;
    }
}
