import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Product } from './../product.model';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    
    private searchUrl = "/api/search";
    constructor(private http: HttpClient){}
    
    // Perform Search Query via HTTP
    getSearch(){
        return this.http.get(this.searchUrl).map(response => {
            return <any>response['products'].map(product => {
                return new Product({
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    merchant: product.merchant
                });
            });
        });
    }
}
