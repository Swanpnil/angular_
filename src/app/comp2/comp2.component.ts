import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
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
      name:'swapnil',
      id:102
   }
   this._utilityService.userName.next(JSON.stringify(emp))
  }
}
