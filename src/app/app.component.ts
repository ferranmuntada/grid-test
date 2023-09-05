import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pruebas dataGrid';
  constructor(private router: Router) {
  }

  goToCustomers() {
    this.router.navigate(['/', 'customers'])
  }
}
