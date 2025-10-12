import { Injectable } from "@angular/core";

@Injectable()
export class ZomotoFoodService{
      getFoodItems(){
         return ["Dosa" , "CB","paneer tikka"]
      }
}