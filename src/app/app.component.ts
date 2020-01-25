import { Component, Output, EventEmitter, Input, ApplicationModule } from '@angular/core';
import { ProdInfoService } from 'src/app/prod-info.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prices';
  finalPrice: number;
  totalPrice: number

  b: boolean = false;
  a: boolean = false;

  constructor(private serv: ProdInfoService){

  }
  onFinalBill(){
    this.b = true;
  }

  onGenerateInvoice(){
    console.log("in onGenerateInvice");
    if(this.serv.prodName1 == undefined || this.serv.prodName2 == undefined || this.serv.prodName1 == "" || this.serv.prodName2 == ""){
      alert("Enter both the Names")
    }
    else{
      if(this.serv.prodPrice1 == undefined || this.serv.prodPrice2 == undefined){
        alert("Enter both the Prices")
      }
      else{
        if(parseInt(this.serv.prodName1) || parseInt(this.serv.prodName2)){
          alert("Enter valid Name without Numbers!")
        }
        else{
          if(isNaN(this.serv.prodPrice1) || isNaN(this.serv.prodPrice2)){
            alert("Enter vaid price without characters!")
          }
          else{
            this.a = true;
            this.totalPrice = this.serv.getTotal();
            this.finalPrice = this.serv.getFinalPrice();
          }
        }
      }
    }
  }
}
