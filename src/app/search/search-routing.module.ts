import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

const searchRoutes: Routes = [
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class SearchRoutingModule { } 
