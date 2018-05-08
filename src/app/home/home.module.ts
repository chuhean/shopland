import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeItemComponent } from './../home-item/home-item.component';
import { CarouselComponent } from './../carousel/carousel.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeItemComponent,
    CarouselComponent
  ]
})
export class HomeModule { }
