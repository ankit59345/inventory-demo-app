import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdInfoService {
  prodName1: string;
  prodName2: string;
  prodPrice1: number;
  prodPrice2: number;
  totalPrice: number;
  finalPrice: number;
  constructor() { }
  getTotal(): number{
    this.prodPrice1 = this.prodPrice1*1;
    this.prodPrice2 = this.prodPrice2*1;
    this.totalPrice = this.prodPrice1 + this.prodPrice2;
    return this.totalPrice;
  }
  getFinalPrice(): number{
    this.finalPrice = +this.totalPrice + +this.totalPrice*0.18;
    return this.finalPrice;
  }
}
