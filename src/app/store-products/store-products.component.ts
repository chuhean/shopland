import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-store-products',
  templateUrl: './store-products.component.html',
  styleUrls: ['./store-products.component.css']
})
export class StoreProductsComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
