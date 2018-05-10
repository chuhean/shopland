import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-store-products-item',
  templateUrl: './store-products-item.component.html',
  styleUrls: ['./store-products-item.component.css']
})
export class StoreProductsItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
