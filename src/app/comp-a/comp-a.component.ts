import { Component } from '@angular/core';
import { CarService } from '../car.service';


// we have created the service
// we have register the service


// we need to use the service ... i have created comp-a i will use the service.


@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {


  MecsList:string[] = [];

  //Dependency injection pattern
  constructor(public carService:CarService){
  }


  getMecsList(){
    this.MecsList = this.carService.getMecsList();  //["john" , "peter"];
    console.log(this.MecsList);
  }


// i want to pass the 2000rs from compa to compb via service

  PaymentTransaction(){
       let amount = "2000rs";
       this.carService.PaymentTransaction(amount);
       //from here
  }


  }


