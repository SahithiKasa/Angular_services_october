import { Component } from '@angular/core';
import { CarService } from '../car.service';
import { logsService } from '../logs.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
})
export class CompBComponent {
  constructor(public carSERvice: CarService,public logService:logsService) {

      // i need to take the money
      this.carSERvice.paymentMessenger.subscribe((result)=>{
           //console.log(result); //not srue
           this.logService.getLogs(result,"❤️❤️❤️");
      })


  }

  availbleSlots: string[] = [];
  GetAvailbleSlots() {
    this.availbleSlots = this.carSERvice.getAvailbleSlots();
    //console.log(this.availbleSlots);
    this.logService.getLogs(this.availbleSlots,"😍😍😍");
  }

    enginesList:string[]=[];
    GetEnginesList(){
    this.enginesList=this.carSERvice.getCarEnginesList();
}
}
