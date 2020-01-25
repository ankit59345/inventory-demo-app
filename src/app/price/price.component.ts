import { Component, OnInit, Input, Output } from '@angular/core';
import { ProdInfoService } from 'src/app/prod-info.service'

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  price1: number;
  price2: number;

  constructor(public obj: ProdInfoService) { }

  ngOnInit() { }

  out(){
    this.obj.prodPrice1 = this.price1;
    this.obj.prodPrice2 = this.price2;
  }

}
