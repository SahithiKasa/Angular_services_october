import { Component } from '@angular/core';
import { ZomotoFoodService } from 'src/app/zomotofood.service';

@Component({
  selector: 'app-comp-a-a',
  templateUrl: './comp-a-a.component.html',
  styleUrls: ['./comp-a-a.component.css']
})
export class CompAAComponent {
 comp_a_afoodItesm:string[] = [];
       constructor(public zomoto:ZomotoFoodService){
          this.comp_a_afoodItesm =  this.zomoto.getFoodItems();
       }
}
