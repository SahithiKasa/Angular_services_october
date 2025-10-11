import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarService } from './car.service';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { EngineService } from './engine.service';


@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarService,EngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }