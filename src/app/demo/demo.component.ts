import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{
  ngOnInit(){}
    
  
  // @Input() myinputmsg: string;
  @Input() employee: any;
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
  

  addtofood(value) {
    // foodevent is nothing but your custom event (foodevent)
    this.foodevent.emit(value);
  }
}

