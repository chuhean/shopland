import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutModalComponent } from './../checkout-modal/checkout-modal.component';
import { CheckoutRoutingModule } from './checkout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  declarations: [
    CheckoutComponent,
    CheckoutModalComponent
  ]
})
export class CheckoutModule { }
