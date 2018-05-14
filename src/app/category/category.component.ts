import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  productFirstRow: Product[];
  productSecondRow: Product[];
  productThirdRow: Product[];

  constructor() {
    //All images size width 350px height 300px
    this.productFirstRow = [
      new Product({title: 'Laptops', image: 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'}),
      new Product({title: 'Desktops', image: 'https://www.fortechassistance.com/wp-content/uploads/2017/11/7-1.png'}),
      new Product({title: 'Monitors', image: 'http://www.secupix.com/admin/uploads/Led%2018.5.jpg'}),
    ];
    
    this.productSecondRow = [
      new Product({title: 'Phones', image: 'https://i1.wp.com/www.celularespaez.com/wp-content/uploads/2018/02/iph-x.jpg?fit=350%2C300'}),
      new Product({title: 'Tablets', image: 'https://adb.tn/wp-content/uploads/2018/03/ipad-argent-1-1.jpg'}),
      new Product({title: 'Headphones', image: 'https://www.pcp.ch/gfx893877new/Soundlink-AE-II-schwarz-893877.jpg'}),
    ];
    
    this.productThirdRow = [
      new Product({title: 'Wearables', image: 'https://www.pc-ostschweiz.ch/gfx1405544new/Alta-HR-Aktivit%C3%A4ts-Tracker-S-schwarz-silber-1405544.jpg'}),
      new Product({title: 'Accessories', image: 'http://i.simpalsmedia.com/marketplace/products/350x350/fa82ef56a840a170b97b825f61bc5bed.jpg'}),
      new Product({title: 'Networking', image: 'http://www.flyingmoth.co.uk/wireless-network-support/2.png'}),
    ];
  }

  ngOnInit() {
  }

}
