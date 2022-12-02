import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'angularapp';
  uname = 'i am from app component';

  
  employeeRecords: any =[
    {
      eName:'Swapnil', eCity:'pune', sallary:'20000'
    },
    {
      eName:'Dayanand', eCity:'Latur', sallary:'25000'
    }
  ]
}
