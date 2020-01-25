import { Component, OnInit, Input } from '@angular/core';
import { ProdInfoService } from 'src/app/prod-info.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  
  name1: string="";
  name2: string="";

  constructor(public obj: ProdInfoService) { 
    
  }
  out(){
    this.obj.prodName1 = this.name1;
    this.obj.prodName2 = this.name2;
  }

  ngOnInit() { }

}
