import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-remove-data',
  templateUrl: './remove-data.component.html',
  styleUrls: ['./remove-data.component.css']
})
export class RemoveDataComponent implements OnInit, OnChanges{
@Input() removeData:string;
@Input() rproduct:Product;

  constructor() {

   }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.removeData);
    
  }

  ngOnInit() {
  }

}
