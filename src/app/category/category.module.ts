import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { JumbotronComponent } from './../jumbotron/jumbotron.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryItemComponent } from './../category-item/category-item.component';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  declarations: [
    CategoryComponent,
    JumbotronComponent,
    CategoryItemComponent
  ]
})
export class CategoryModule { }
