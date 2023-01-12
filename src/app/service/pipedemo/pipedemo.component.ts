import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  price: number = 800000;
  obser
  todaysDate = new Date();
  user = {id:'101', name:'test1'}
  constructor(private _utilityService: UtilityService) {
    this.obser = this._utilityService.userName;
   }

  ngOnInit() {
  }

}
