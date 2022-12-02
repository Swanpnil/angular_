import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
uname;
  colorVal ='blue';
  people:any[] = [
    {
      "name": "Jack",
      "country": "UK"
    },
    {
      "name": "Sumit",
      "country": "USA"
    },
    {
      "name": "Anup",
      "country": "HK"
    },
    {
      "name": "coidemind",
      "country": "UK"
    },
    {
      "name": "Surya",
      "country": "USA"
    }
  ]
  constructor() { }

  ngOnInit() {
  }
show(value)
{
  this.uname=value;
}
}
