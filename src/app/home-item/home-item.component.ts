import { Component, OnInit, Input } from '@angular/core';
import { Image } from './../image.model';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent implements OnInit {
  @Input() image: Image;

  constructor() { 
  }

  ngOnInit() {
  }

}
