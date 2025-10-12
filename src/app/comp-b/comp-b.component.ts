import { Component } from '@angular/core';
import { ZomotoFoodService } from '../zomotofood.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
     compBfoodItesm:string[] = [];
       constructor(public zomoto:ZomotoFoodService){
          this.compBfoodItesm =  this.zomoto.getFoodItems();
       }
}
