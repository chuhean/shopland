import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  product: Product[];
  
  constructor() { 
    this.product = [
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'})
    ];
  }

  ngOnInit() {
  }

}
