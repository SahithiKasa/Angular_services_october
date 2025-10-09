import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
  constructor(public carSERvice: CarService) {

      // i need to take the money
      this.carSERvice.paymentMessenger.subscribe((result)=>{
           console.log(result); //not srue
      })


  }

  availbleSlots: string[] = [];
  GetAvailbleSlots() {
    this.availbleSlots = this.carSERvice.getAvailbleSlots();
    console.log(this.availbleSlots);
  }



}