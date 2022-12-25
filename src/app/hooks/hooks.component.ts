import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck {
  @Input() userid: number;
  @Input() parentData: string;
  @Input() product: Product;
  pi;
  constructor() {
    this.pi = 3.14;
    console.log("HooksComponent constructor called");
    
   }
  ngDoCheck(): void {
    console.log("ngDoCheck called");
    
  }
   ngOnChanges(changes: SimpleChanges): void {
     console.log("HooksComponent ngOnChanges called");
     for(const propname in changes){
      const prop = changes[propname];
      const {previousValue, currentValue, firstChange} = prop;

      console.log(`prop name ${propname}`);
      console.log(`prev value ${previousValue}`);
      console.log(`current value ${currentValue}`);
      console.log(`first change ${firstChange}`);
      console.log("-------------------------");
      
     }
     
   }
//Hooks
  ngOnInit() {
    console.log("HooksComponent ngOnInit called");
    
  }

}
