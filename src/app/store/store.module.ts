import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreProductsItemComponent } from './../store-products-item/store-products-item.component';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [
    StoreComponent,
    StoreProductsItemComponent
  ]
})
export class StoreModule { }