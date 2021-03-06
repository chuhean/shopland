import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { CategoryModule } from './category/category.module';
import { SearchModule } from './search/search.module';
import { ProductModule } from './product/product.module';
import { CheckoutModule } from './checkout/checkout.module';
import { StoreModule } from './store/store.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CategoryModule,
    SearchModule,
    ProductModule,
    CheckoutModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
