import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[appCustdir]'
})

export class custdirDirective {
    public name: string = '';
    constructor(private el: ElementRef, private render: Renderer2) {
        console.log('custom directive applied');

        render.setStyle(el.nativeElement, 'backgroundColor', 'yellow')
        
    }
}

function directive(arg0: { selctor: string; }) {
    throw new Error('Function not implemented.');
}
