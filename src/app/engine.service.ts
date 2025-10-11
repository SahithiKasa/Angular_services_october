//by using the class
//service is nothting but simple class

import { Injectable , EventEmitter } from "@angular/core";


//angular identify that treat carserice as service in theapp 
//More over you can use other paymentservice into the carservice


//Geya sri  --->>  Samusung mobile ---> local mobile shop --> display(green color)

//local mobile shop(no....)

//Tell me that what is the behaviour the local shop owner --->

// first of all they do't the loose the customer

//   local mobile service shop  ---> samsung mobile service

// Gold shop serivce ---> chain design (book let ) 1 or 2 members   ---> shop
// 

@Injectable()
export class EngineService{
    getEnginesList(){
        return["Coolant","Brake fluid","Transmission fluid"];
    }
}