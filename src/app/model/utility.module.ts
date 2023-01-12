import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { custdirDirective } from '../custdir.directive';



@NgModule({
  declarations: [
    custdirDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    custdirDirective
  ]
})
export class UtilityModule { }
