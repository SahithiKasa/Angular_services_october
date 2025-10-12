import { Component } from '@angular/core';
import { ZomotoFoodService } from './zomotofood.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ZomotoFoodService]
})
export class AppComponent {
  title = 'Angular_services_oct';
}