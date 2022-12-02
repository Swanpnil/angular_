import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  // @Input() myinputmsg: string;
  @Input() employee: string;
  constructor() { }

  ngOnInit() {
    console.log('from parent', this.employee);

    
  }

}
