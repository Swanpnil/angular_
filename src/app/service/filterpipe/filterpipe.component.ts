import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
namesearch: string='';
productArr: any[]=[
  {
    sno:'1',
    name:'mobile',
    price:'7000',
    availability:'available'
  },
  {
    sno:'2',
    name:'laptop',
    price:'50000',
    availability:'available'
  },
  {
    sno:'3',
    name:'TV',
    price:'17000',
    availability:'Not available'
  },
  {
    sno:'4',
    name:'Washing Machine',
    price:'65000',
    availability:'available'
  },
]
  constructor() { }

  ngOnInit() {
  }
  addProduct(productName){
    alert('called success');
    this.productArr.push({
      sno:'5',
      name:productName.value,
      price:'85000',
      availability:'available'
    })
  }
}
