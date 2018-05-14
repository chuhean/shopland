export class Product {
    title: string;
    image: string;
    link: string;
    description: string;
    price: number;
    rating: number;
    merchant: string;
    id: string;
// title: string, image?: string, link?: string, description?: string, price?: number, rating?: number, merchant?: string, id?: string
    constructor(obj?: any) {
        this.title = obj.title;
        this.image = obj.image;
        this.link = obj.link;
        this.description = obj.description;
        this.price = obj.price;
        this.rating = obj.rating;
        this.merchant = obj.merchant;
        this.id = obj.id;
    }
}
