import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompAAComponent } from './comp-a/comp-a-a/comp-a-a.component';
import { ZomotoFoodService } from './zomotofood.service';


@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    CompAAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ZomotoFoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }