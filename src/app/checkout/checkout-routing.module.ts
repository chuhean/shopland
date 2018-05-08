import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const checkoutRoutes: Routes = [
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(checkoutRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CheckoutRoutingModule { } 
