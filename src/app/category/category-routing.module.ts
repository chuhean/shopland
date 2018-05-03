import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';

const categoryRoutes: Routes = [
  { path: 'electronics', component: CategoryComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CategoryRoutingModule { } 
