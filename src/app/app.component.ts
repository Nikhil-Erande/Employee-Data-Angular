import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import EmployeeJson from './employee.json';

interface EMPLOYEE {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Employees: EMPLOYEE[] = EmployeeJson;

  constructor() {
    console.log(this.Employees);
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
