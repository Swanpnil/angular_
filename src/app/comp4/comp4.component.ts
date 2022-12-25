import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
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
      name:'Dayanand',
      id:104
   }
   this._utilityService.userName.next(JSON.stringify(emp))
  }
}

