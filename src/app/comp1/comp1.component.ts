import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
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
       name:'sumit',
       id:101
    }
    this._utilityService.userName.next(JSON.stringify(emp))
  }
}
