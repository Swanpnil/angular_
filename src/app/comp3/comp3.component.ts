import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';


@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  username;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res =>{
      this.username = res;
      console.log(res);
      
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){
    let emp = {
      name:'Dnynesh',
      id:103
   }
   this._utilityService.userName.next(JSON.stringify(emp))
  }
}

  
