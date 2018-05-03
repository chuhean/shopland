import { Component, OnInit } from '@angular/core';
import { Image } from './../image.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  imageFirstRow: Image[];
  imageSecondRow: Image[];
  imageThirdRow: Image[];

  constructor() {
    //All images size width 350px height 300px
    this.imageFirstRow = [
      new Image('Laptops', 'https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/41NpHOEaC%2BL.jpg?resize=350%2C300&ssl=1'),
      new Image('Desktops', 'https://www.fortechassistance.com/wp-content/uploads/2017/11/7-1.png'),
      new Image('Monitors', 'http://www.secupix.com/admin/uploads/Led%2018.5.jpg'),
    ];
    
    this.imageSecondRow = [
      new Image('Phones', 'https://i1.wp.com/www.celularespaez.com/wp-content/uploads/2018/02/iph-x.jpg?fit=350%2C300'),
      new Image('Tablets', 'https://adb.tn/wp-content/uploads/2018/03/ipad-argent-1-1.jpg'),
      new Image('Headphones', 'https://www.pcp.ch/gfx893877new/Soundlink-AE-II-schwarz-893877.jpg'),
    ];
    
    this.imageThirdRow = [
      new Image('Wearables', 'https://www.pc-ostschweiz.ch/gfx1405544new/Alta-HR-Aktivit%C3%A4ts-Tracker-S-schwarz-silber-1405544.jpg'),
      new Image('Accessories', 'http://i.simpalsmedia.com/marketplace/products/350x350/fa82ef56a840a170b97b825f61bc5bed.jpg'),
      new Image('Networking', 'http://www.flyingmoth.co.uk/wireless-network-support/2.png'),
    ];
  }

  ngOnInit() {
  }

}
