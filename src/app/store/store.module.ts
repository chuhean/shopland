import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreProductsItemComponent } from './../store-products-item/store-products-item.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreService } from './store.service';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [
    StoreComponent,
    StoreProductsItemComponent
  ],
  providers: [
    StoreService
  ]
})
export class StoreModule { }