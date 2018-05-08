export class Product {
    title: string;
    image: string;
    link: string;
    description: string;
    price: number;
    rating: number;
    merchant: string;

    constructor(title: string, image: string, link?: string, description?: string, price?: number, rating?: number, merchant?: string) {
        this.title = title;
        this.image = image;
        this.link = link;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.merchant = merchant;
    }
}
