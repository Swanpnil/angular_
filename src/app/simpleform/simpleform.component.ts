import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  // defaultValue: string = 'angular';

  defaultValue2: string = 'Angular';
  defaultGender: string ='male';
  employee = new Employee();
  submitted: boolean = false;
  genders =[
    {id:'1' , value:'male'},
    {id:'2' , value:'female'}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  

  OnSubmit(form:NgForm) {
    this.submitted = true;
    this.employee .coursees = form.value.course;
    this.employee .username = form.value.username;
    this.employee .email = form.value.email;
    this.employee .genders = form.value.gender;
    this.saveEmployeeData(this.employee);
  }
  saveEmployeeData(emp:Employee) {
    console.log(emp.coursees);
    console.log(emp.genders);
    
  }
}
