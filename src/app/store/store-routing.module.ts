import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';

const storeRoutes: Routes = [
  { path: 'store', component: StoreComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(storeRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class StoreRoutingModule { } 
