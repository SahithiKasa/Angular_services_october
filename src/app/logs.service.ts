import { Injectable } from "@angular/core";
@Injectable({'providedIn':'root'})
export class logsService{
    getLogs(data:any , emojiType:any){
        console.log(emojiType + data);
    }
}
