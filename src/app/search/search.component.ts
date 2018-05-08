import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  product: Product[];
  
  constructor() { 
    this.product = [
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Product('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
    ];
  }

  ngOnInit() {
  }

}
