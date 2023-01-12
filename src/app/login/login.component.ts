import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Window } from 'selenium-webdriver';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _authService: AuthService) { }

  ngOnInit() {
  }
  checkuser(uname, pwd){

    var output = this._authService.checkUserNameAndPassword(uname, pwd);

    if(output == true) {
      window.alert('login Successful');
      this._route.navigate(['products']);
    } else {
      window.alert('invalid Username and Password');
    }
  //   if(uname=='admin' && pwd=='admin'){
  //     this._route.navigate(['products/laptop'])
  //   }
  }
}
