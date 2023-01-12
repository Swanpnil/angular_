import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { UtilityModule } from '../model/utility.module';

const prodRoute : Routes = [
{path: '', component: ProductsComponent, children:[
  { path:'laptop', component: LaptopComponent},
  { path:'tv', component: TvComponent},
  { path:'tablet', component: TabletComponent},
  { path:'washingMachine', component: WashingMachineComponent},
] },
]

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    TvComponent,
    TabletComponent,
    WashingMachineComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoute),
    UtilityModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsModule {
  constructor(){
    console.log("productModule called");
    
  }
 }
