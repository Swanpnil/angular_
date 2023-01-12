import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
  checkUserNameAndPassword(uname: string, pwd: string){
    if(uname =="admin" && pwd =="admin123"){
      localStorage.setItem('uname',"admin");
      return true;
    }else {
      return false;
    }
  }
}
