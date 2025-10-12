import { Component } from '@angular/core';
import { ZomotoFoodService } from '../zomotofood.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls:['./comp-a.component.css'],
  //providers:[ZomotoFoodService]
})
export class CompAComponent {
     foodItesm:string[] = [];
     constructor(public zomoto:ZomotoFoodService){
        this.foodItesm =  this.zomoto.getFoodItems();
     }
    }