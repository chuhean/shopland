import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchItemComponent } from './../search-item/search-item.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchComponent,
    SearchItemComponent,
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }