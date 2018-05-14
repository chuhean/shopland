import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  product: Product[];
  
  constructor(private searchService: SearchService) { 
  }

  ngOnInit() {
    this.searchService.getSearch()
    .subscribe(products => this.product = products)
  }

}
